<template>
<h2>Form</h2>
  <form @submit.prevent="finishfilled">
      <label>Name : <input type="text" class="border border-gray-200 mt-7" v-model="name" required></label><br>
      <label>Lastname :<input type="text" class="border border-gray-200 mt-7" v-model="lastname" required></label><br>
      <label>Age :<input type="number" class="border border-gray-200 mt-7" v-model="age" required></label><br>
      <button class="m-4 bg-pink-400">submit</button>
      {{name}},{{lastname}},{{age}}
  </form>
</template>

<script>
export default {
    data() {
        return {
            name:'',
            lastname:'',
            age:''
        }
    },
    methods: {
        async finishfilled(){
            let Student = {
                firstname : this.name,
                lastname : this.lastname,
                age : this.age
                }
            const response = await fetch("http://localhost:3000/students",{
                method : "post",
                //header เหมือนจ่าหน้าซองว่าส่งไปเป็น json 
                // body เป็นเนื้อความข้างใน 
                //JSON.stringify เปลี่ยน objเป็น json
                headers : {"Content-Type":"application/json"},
                body : JSON.stringify(Student)
            })
            console.log(response)
            this.$router.push('/')
        }
    },
}
</script>

<style>

</style>
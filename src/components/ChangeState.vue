<template>
<p>edit</p>
  <form @submit.prevent>
      <label>Name : <input type="text" class="border border-gray-200 mt-7" v-model="name" required></label><br>
      <label>Lastname :<input type="text" class="border border-gray-200 mt-7" v-model="lastname" required></label><br>
      <label>Age :<input type="number" class="border border-gray-200 mt-7" v-model="age" required></label><br>
      <div class="flex justify-center">
            <button class="m-4 bg-green-400 p-3" @click="editStudent"><span class="material-icons">create</span></button>
            <button class="m-4 bg-red-400 p-3" @click="deleteStudent"><span class="material-icons">edit_off</span></button>
            <button class="m-4 bg-yellow-400 p-3" @click="backTohome"><span class="material-icons">
                arrow_back_ios_new</span></button>
      </div>
      
      <!-- {{name}},{{lastname}},{{age}} -->
  </form>
</template>

<script>
export default {
    props : ['id'],
    data() {
        return {
            url: 'http://localhost:3000/students/' + this.id,
            name:'',
            lastname:'',
            age:''
        }
    },
    methods: {
        async deleteStudent(){
            const response = await fetch(this.url,{
                method:'delete'
            })
            console.log(response)
            this.$router.push('/')
        },
        async editStudent(){
            let editedStudent = {
                firstname : this.name,
                lastname : this.lastname,
                age : this.age
                }
            const response = await fetch(this.url,{
                method:'put',
                headers : {"Content-Type":"application/json"},
                body : JSON.stringify(editedStudent)
            })
            console.log(response)
            this.$router.push('/')
        },
        backTohome(){
            this.$router.push('/')
        }
    },
    async mounted() {
        const response = await fetch(this.url);
        const data = await response.json();
        this.name = data.firstname
        this.lastname = data.lastname
        this.age = data.age
    },

}
</script>

<style>

</style>
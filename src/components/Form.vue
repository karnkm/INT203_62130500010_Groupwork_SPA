<template>
<h2 class="text-xl italic font-semibold text-center pt-8">Register for reserve vaccine.</h2>

<div class="bg-blue-100 mt-5">
 <form @submit.prevent="finishfilled">
    <div class="grid grid-cols-2 gap-4 mt-5 p-12">
                <div class="flex flex-col float-right">
                    <label for="firstname" class="text-sm leading-7 text-gray-600">First Name</label>
                    <input type="text" id="firstname" v-model="name" name="firstname" class="bg-white border-b-2 border-blue-300 rounded px-4 py-2 mb-4">
                </div>
                <div class="flex flex-col">
                    <label for="lastname" class="text-sm leading-7 text-gray-600">Last Name</label>
                    <input type="text" id="lastname" v-model="lastname" name="lastname" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4">
                </div>
                <div class="flex flex-col">
                    <label for="age" class="text-sm leading-7 text-gray-600">Age</label>
                    <input type="text" id="age" v-model="age" name="age" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4">
                </div>
                <div class="flex flex-col">
                    <label class="text-sm leading-7 text-gray-600">Gender</label>
                    <div class=" pt-2 space-x-2 align-middle">
                        <input type="radio" id="Male" v-model="gender" name="gender" value="M" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 ">
                        <label for="Male">Male</label>
                        <input type="radio" id="Female" v-model="gender" name="gender" value="F" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4">
                        <label for="Female">Female</label>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
                    <input type="text" id="email" v-model="email" name="email" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4">
                </div>
                <div class="flex flex-col">
                    <label for="phone" class="text-sm leading-7 text-gray-600">Phone Number</label>
                    <input type="text" id="phone" v-model="phone" name="phone" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4">
                </div>
                <div class="flex flex-col">
                    <label class="text-sm leading-7 text-gray-600">Select Vaccine</label>
                    <div class=" pt-2 space-x-2 align-middle">
                        <input type="radio" id="pfizer" v-model="vaccine" name="vaccine" value="pfizer" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 ">
                        <label for="pfizer">Pfizer-BioNTech</label>
                        <input type="radio" id="jj" v-model="vaccine" name="vaccine" value="jj" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 ">
                        <label for="jj">Johnson&Johnsonh</label>
                        <input type="radio" id="astra" v-model="vaccine" name="vaccine" value="astra" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 ">
                        <label for="astra">AstraZeneca</label>
                        <input type="radio" id="moderna" v-model="vaccine" name="vaccine" value="moderna" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 ">
                        <label for="moderna">Moderna</label>
                        <input type="radio" id="sinovac" v-model="vaccine" name="vaccine" value="sinovac" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 ">
                        <label for="sinovac">Sinovac</label>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="allergy" class="text-sm leading-7 text-gray-600">Drug allergy</label>
                    <input type="text" id="allergy" v-model="allergy" name="allergy" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4">
                </div>

            </div>
    <button class="m-7 px-8 py-2 bg-red-500 rounded-md text-white hover:bg-blue-900">Reserse Vaccine</button><br>
              {{name}} {{lastname}} {{age}} {{email}} {{phone}} {{allergy}}
  </form>
</div>

</template>

<script>
export default {
    data() {
        return {
            name:'',
            lastname:'',
            age:'',
            email:'',
            telno:'',
            vaccine :'',
            allergy:''
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
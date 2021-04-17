<template>
<p class="text-xl italic font-semibold text-center pt-8">Edit your data and don't forget for checking.</p>
<div class="text-center">
<form @submit.prevent>
      <div class="grid grid-cols-2 gap-4 mt-5 p-12 bg-pink-100">
                <div class="flex flex-col float-right">
                    <label for="firstname" class="text-sm leading-7 text-gray-600">First Name</label>
                    <input type="text" id="firstname" v-model="name" name="firstname" class="bg-white border-b-2 border-pink-300 rounded px-4 py-2 mb-4">
                </div>
                <div class="flex flex-col">
                    <label for="lastname" class="text-sm leading-7 text-gray-600">Last Name</label>
                    <input type="text" id="lastname" v-model="lastname" name="lastname" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4">
                </div>
                <div class="flex flex-col">
                    <label for="age" class="text-sm leading-7 text-gray-600">Age</label>
                    <input type="number" id="age" v-model="age" name="age" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4">
                </div>
                <div class="flex flex-col">
                    <label class="text-sm leading-7 text-gray-600">Gender</label>
                    <div class=" pt-2 space-x-2 align-middle">
                        <input type="radio" id="Male" v-model="gender" name="gender" value="M" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4 ">
                        <label for="Male">Male</label>
                        <input type="radio" id="Female" v-model="gender" name="gender" value="F" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4">
                        <label for="Female">Female</label>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
                    <input type="text" id="email" v-model="email" name="email" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4">
                </div>
                <div class="flex flex-col">
                    <label for="phone" class="text-sm leading-7 text-gray-600">Phone Number</label>
                    <input type="text" id="phone" v-model="phone" name="phone" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4">
                </div>
                <div class="flex flex-col">
                    <label class="text-sm leading-7 text-gray-600">Select Vaccine</label>
                    <div class=" pt-2 space-x-2 align-middle">
                        <input type="radio" id="pfizer" v-model="vaccine" name="vaccine" value="pfizer" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4 ">
                        <label for="pfizer">Pfizer-BioNTech</label>
                        <input type="radio" id="jj" v-model="vaccine" name="vaccine" value="jj" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4 ">
                        <label for="jj">Johnson&Johnsonh</label>
                        <input type="radio" id="astra" v-model="vaccine" name="vaccine" value="astra" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4 ">
                        <label for="astra">AstraZeneca</label>
                        <input type="radio" id="moderna" v-model="vaccine" name="vaccine" value="moderna" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4 ">
                        <label for="moderna">Moderna</label>
                        <input type="radio" id="sinovac" v-model="vaccine" name="vaccine" value="sinovac" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4 ">
                        <label for="sinovac">Sinovac</label>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="allergy" class="text-sm leading-7 text-gray-600">Drug allergy</label>
                    <input type="text" id="allergy" v-model="allergy" name="allergy" class="bg-white border-b-2 border-pink-300  rounded px-4 py-2 mb-4">
                </div>

            </div>
      <div class="flex justify-center">
            <button class="m-4 bg-green-400 p-3" @click="editStudent"><span class="material-icons">create</span></button>
            <button class="m-4 bg-red-400 p-3" @click="deleteStudent"><span class="material-icons">delete</span></button>
            <button class="m-4 bg-yellow-400 p-3" @click="backTohome"><span class="material-icons">
                arrow_back_ios_new</span></button>
      </div>
      
      <!-- {{name}},{{lastname}},{{age}} -->
  </form>
</div>
  
</template>

<script>
export default {
    props : ['id'],
    data() {
        return {
            url: 'http://localhost:3000/students/' + this.id,
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
                age : this.age,
                email : this.email,
                telno : this.telno,
                vaccine : this.vaccine,
                allergy : this.allergy
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
        this.email = data.email
        this.telno = data.telno
        this.vaccine = data.vaccine
        this.allergy = data.allergy
    },

}
</script>

<style>

</style>
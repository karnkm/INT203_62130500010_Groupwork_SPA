<template>
<h2 class="text-xl italic font-semibold text-center pt-20">*・° Register for reserve vaccine °・*</h2>

<div class="bg-blue-100 mt-5">
 <form @submit.prevent="finishfilled">
    <div class="grid grid-cols-2 gap-4 mt-5 p-12">
                <div class="flex flex-col float-right">
                    <label for="firstname" class="text-sm leading-7 text-gray-600">First Name</label>
                    <input type="text" id="firstname" v-model="firstname" name="firstname" class="bg-white border-b-2 border-blue-300 rounded px-4 py-2 mb-4" required>
                </div>
                <div class="flex flex-col">
                    <label for="lastname" class="text-sm leading-7 text-gray-600">Last Name</label>
                    <input type="text" id="lastname" v-model="lastname" name="lastname" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4" required>
                </div>
                <div class="flex flex-col">
                    <label for="age" class="text-sm leading-7 text-gray-600">Age</label>
                    <input type="text" id="age" v-model="age" name="age" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4" required>
                </div>
                <div class="flex flex-col">
                    <label class="text-sm leading-7 text-gray-600">Gender</label>
                    <div class=" pt-2 space-x-2 align-middle" >
                        <input type="radio" id="Male" v-model="gender" name="gender" value="M" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 " required>
                        <label for="Male">Male</label>
                        <input type="radio" id="Female" v-model="gender" name="gender" value="F" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 " required>
                        <label for="Female">Female</label>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
                    <input type="text" id="email" v-model="email" name="email" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4" required>
                </div>
                <div class="flex flex-col">
                    <label for="phone" class="text-sm leading-7 text-gray-600">Phone Number</label>
                    <input type="text" id="phone" v-model="phone" name="phone" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4" required>
                </div>
                <div class="flex flex-col">
                    <label class="text-sm leading-7 text-gray-600">Select Vaccine</label>
                    <div class=" pt-2 space-x-2 align-middle" required>
                        <input type="radio" id="pfizer" v-model="vaccine" name="vaccine" value="Pfizer-BioNTech" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 " required>
                        <label for="pfizer">Pfizer-BioNTech</label>
                        <input type="radio" id="jj" v-model="vaccine" name="vaccine" value="Johnson&Johnson" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 " required>
                        <label for="jj">Johnson&Johnson</label>
                        <input type="radio" id="astra" v-model="vaccine" name="vaccine" value="AstraZeneca" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 " required>
                        <label for="astra">AstraZeneca</label>
                        <input type="radio" id="moderna" v-model="vaccine" name="vaccine" value="Moderna" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 " required>
                        <label for="moderna">Moderna</label>
                        <input type="radio" id="sinovac" v-model="vaccine" name="vaccine" value="Sinovac" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4 " required>
                        <label for="sinovac">Sinovac</label>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="allergy" class="text-sm leading-7 text-gray-600">Drug allergy</label>
                    <input type="text" id="allergy" v-model="allergy" name="allergy" class="bg-white border-b-2 border-blue-300  rounded px-4 py-2 mb-4" required>
                </div>

            </div>
    <button class="m-7 px-8 py-2 bg-red-500 rounded-md text-white hover:bg-blue-900">Reserse Vaccine</button><br>
              {{firstname}} {{lastname}} {{age}} {{email}} {{phone}} {{allergy}}
  </form>
</div>

</template>

<script>
export default {
    data() {
        return {
            firstname:'',
            lastname:'',
            age:'',
            gender:'',
            email:'',
            phone:'',
            vaccine :'',
            allergy:''
        }
    },
    methods: {
        async finishfilled(){
            let Person = {
                firstname : this.firstname,
                lastname : this.lastname,
                age : this.age,
                gender : this.gender,
                email : this.email,
                phone : this.phone,
                vaccine : this.vaccine,
                allergy : this.allergy
                }
            const response = await fetch("http://localhost:3000/persons",{
                method : "post",
                //header เหมือนจ่าหน้าซองว่าส่งไปเป็น json 
                // body เป็นเนื้อความข้างใน 
                //JSON.stringify เปลี่ยน objเป็น json
                headers : {"Content-Type":"application/json"},
                body : JSON.stringify(Person)
            })
            console.log(response)
            this.$router.push('/edit')
        }
    },
}
</script>

<style>

</style>
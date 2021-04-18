<template>
<p class="text-xl italic font-semibold text-center pt-8">✩ ‧ ₊ Edit your data and don't forget for checking ₊ ‧ ✩</p>
<div class="text-center">
<div
      v-for="person in persons"
      :key="person.id"
      @click="handleClick(person)"
    >
      <div class="mx-36 p-7 rounded-3xl bg-blue-100 mt-16 text-lg cursor-pointer">
        <p>ชื่อ :{{ person.firstname }}</p>
        <p>นามสกุล : {{ person.lastname }}</p>
        <p>อายุ : {{ person.age }}</p>
        <p>วัคซีนที่จอง : {{ person.vaccine }}</p>
      </div>
    </div>


</div>
  
</template>

<script>
export default {
    props : ['id'],
    data() {
        return {
            url: 'http://localhost:3000/persons/',
            
            persons:[],
            clickPerson: false
        }
    },
    methods: {
        async deletePerson(){
            const response = await fetch(this.url+this.personId,{
                method:'DELETE'
            })
            this.clickPerson = false;
            console.log(response)
            this.$router.push('/edit')
        },
        async editPerson(){
            let editedPerson = {
                firstname : this.firstname,
                lastname : this.lastname,
                age : this.age,
                gender : this.gender,
                email : this.email,
                phone : this.phone,
                vaccine : this.vaccine,
                allergy : this.allergy
                }
                console.log(editedPerson)
            const response = await fetch(this.url+this.personId,{
                method:'PUT',
                headers : {"Content-Type":"application/json"},
                body : JSON.stringify(editedPerson)
            })
            this.clickPerson = false;
            console.log(response)
            this.$router.push('/edit')
        },
        backTohome(){
            this.$router.push('/')
        },
        handleClick(person){
            this.$router.push({name:'Edit',params:{id:person.id}})
        }
    },
    async mounted() {
        const res = await fetch(this.url)
        const data = await res.json()
        this.persons = await data
        console.log(this.persons)
    },

}
</script>

<style>

</style>
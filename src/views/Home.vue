<template>
  <div class="home ">
    <h2 class="text-xl italic font-semibold text-center pt-20">⊹ യ ⋆ We want you to chosse the best vaccine for yourself⋆ യ ⊹</h2>
    <div
      v-for="person in persons"
      :key="person.id"
      @click="handleClick(person.id)"
    >
      <div class="mx-36 p-60 rounded-3xl bg-pink-100 mt-16">
        
      </div>
    </div>
    <div class="flex justify-center pt-12">
      <button class="px-8 py-4 bg-red-500 rounded-md text-white hover:bg-blue-900">Let's see the different!</button> 
    </div>
  </div>
  
       
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      persons: [],
    };
  },
  methods: {
    handleClick(personId) {
      console.log(personId);
      // this.$router.push({ name: "ChangeState", params: { id: personId } });
    },
  },

  async mounted() {
    const response = await fetch("http://localhost:3000/persons");
    const data = await response.json();
    this.persons = await data;
  },
};
</script>

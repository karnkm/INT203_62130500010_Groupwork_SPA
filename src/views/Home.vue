<template>
  <div class="home bg-yellow-100 h-screen">
    <h2 class="text-xl italic font-semibold text-center pt-10 pb-12 text-blue-900">
      ⊹ യ ⋆ We want you to chosse the best vaccine for yourself⋆ യ ⊹
    </h2>

    <vueper-slides slide-image-inside>
      <vueper-slide
        v-for="vaccinePhoto in vaccinePhotos"
        :key="vaccinePhoto.id"
        :image="vaccinePhoto.image"
        :title="vaccinePhoto.title"
      />
    </vueper-slides>
    <div class="flex justify-center pt-12">
      <button @click="gotoAbout" class="m-2 mb-10 px-8 py-3 bg-red-500 rounded-md text-white hover:bg-blue-900">Let's see the different!</button><br>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Home",
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      vaccinePhotos: [
        {
          id: 1,
          image: require("@/assets/vaccine/pfizer.jpg"),
        },
        {
          id: 2,
          image: require("@/assets/vaccine/astra2.jpg"),
        },
        {
          id: 3,
          image: require("@/assets/vaccine/moderna2.jpg"),
        },
        {
          id: 4,
          image: require("@/assets/vaccine/johnson.jpg"),
        },
        {
          id: 5,
          image: require("@/assets/vaccine/sinovac.jpg"),
        },
      ],
    };
  },
  methods: {
    gotoAbout() {
      this.$router.push("/about");
    },
  },

  async mounted() {
    const response = await fetch("http://localhost:3000/persons");
    const data = await response.json();
    this.persons = await data;
  },
};
</script>

<style>
.vueperslide {
  background: linear-gradient(15deg, #ffffff, #c7471f);
}
.vueperslide__image {
  height: 100%;
  width: 60%;
  margin: 0 auto 0 auto;
}
</style>

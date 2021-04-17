<template>
  <div class="home">
    <h2>home</h2>
    <div
      v-for="student in students"
      :key="student.id"
      @click="handleClick(student.id)"
    >
      <div class="border border-black">
        <p>ชื่อ :{{ student.firstname }}</p>
        <p>นามสกุล : {{ student.lastname }}</p>
        <p>อายุ : {{ student.age }}</p>
      </div>
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
      students: [],
    };
  },
  methods: {
    handleClick(studentId) {
      console.log(studentId);
      this.$router.push({ name: "ChangeState", params: { id: studentId } });
    },
  },

  async mounted() {
    const response = await fetch("http://localhost:3000/students");
    this.students = await response.json();
  },
};
</script>

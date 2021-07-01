<template>
    <h1 class="">contacts</h1>
</template>
<script>
export default {
beforeCreate(){
    console.log("before create");
},
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  beforeMount() {
    console.log("before mounted");
  },
  destroyed() {
    console.log("destroyed");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  updated() {
    console.log("updated");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
};
</script>
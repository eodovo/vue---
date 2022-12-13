<template>
  <img src="../assets/main.jpg" alt="main" class="visual" />
</template>
<style>
.visual {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
</style>
<script>
export default {
  //props 속성 만들어주는
  props: ["plogo"],
};
</script>

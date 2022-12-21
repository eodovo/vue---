<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="require(`@/assets/${item.src}`)"></v-carousel-item>
  </v-carousel>
</template>
<style></style>
<script>
export default {
  //props 속성 만들어주는
  props: ["plogo"],
};
</script>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "slide1.jpg",
        },
        {
          src: "slide2.jpg",
        },
        {
          src: "slide3.jpg",
        },
        {
          src: "slide4.jpg",
        },
      ],
    };
  },
};
</script>

<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
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
          src: "https://d2g44tvvp35wo2.cloudfront.net/photo/kr/2019/12/11/%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90,_%EC%84%9C%EC%9A%B8_%EC%A7%80%ED%95%98%EC%B2%A0_90%EA%B0%9C_%EC%97%AD%EC%82%AC%EC%97%90_%EC%8A%A4%EB%A7%88%ED%8A%B8_%EC%82%AC%EC%9D%B4%EB%8B%88%EC%A7%80_%EC%84%A4%EC%B9%98(4).jpg",
        },
        {
          src: "https://d2g44tvvp35wo2.cloudfront.net/photo/kr/2019/12/11/%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90,_%EC%84%9C%EC%9A%B8_%EC%A7%80%ED%95%98%EC%B2%A0_90%EA%B0%9C_%EC%97%AD%EC%82%AC%EC%97%90_%EC%8A%A4%EB%A7%88%ED%8A%B8_%EC%82%AC%EC%9D%B4%EB%8B%88%EC%A7%80_%EC%84%A4%EC%B9%98(3).jpg",
        },
        {
          src: "./images/main.jpg",
        },
        {
          src: "https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2017/10/59e864aedb78a_59e85488c5b9e_1751821378.jpg",
        },
      ],
    };
  },
};
</script>

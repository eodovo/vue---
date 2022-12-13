<!-- 메인 페이지 마크업 -->
<template lang="html">
  <div class="box1">
    <div class="intro">
      <h2>서울시 지하철 노선 정보</h2>
    </div>
    <v-card>
      <v-tabs v-model="tab" background-color="primary" dark>
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="list">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat>
            <v-card-text>{{ item.tab + " 노선도 정보" }}</v-card-text>
            <v-card-text>{{ item.content }}</v-card-text>
            <img :src="item.img" alt="노선도 이미지" />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<style>
.v-sheet.v-card:not(.v-sheet--outlined) {
  height: 1000px;
}
.theme--dark.v-tabs > .v-tabs-bar {
  background-color: #44b259;
}
.intro {
  margin: 4% 0;
}
.intro h2 {
  font-size: 2em;
}
.v-slide-group__content {
  justify-content: space-evenly;
}
</style>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { tab: "1호선", content: "Tab 1 Content", img: "./assets/1.png" },
        { tab: "2호선", content: "Tab 2 Content", img: "./assets/2.png" },
        { tab: "3호선", content: "Tab 3 Content", img: "./assets/3.png" },
        { tab: "4호선", content: "Tab 4 Content", img: "./assets/4.png" },
        { tab: "5호선", content: "Tab 5 Content", img: "./assets/5.png" },
        { tab: "6호선", content: "Tab 6 Content", img: "./assets/6.png" },
        { tab: "7호선", content: "Tab 7 Content", img: "./assets/7.png" },
        { tab: "8호선", content: "Tab 8 Content", img: "./assets/8.png" },
        { tab: "9호선", content: "Tab 9 Content", img: "./assets/9.png" },
      ],
    };
  },
};
</script>

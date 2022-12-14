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
            <v-card-text class="subtitle">{{ item.tab + " 노선도 정보" }}</v-card-text>
            <v-card-text class="content">{{ item.content }}</v-card-text>
            <img :src="item.img" alt="노선도 이미지" />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<style>
.v-tabs {
  width: 80%;
  border-radius: 20px;
  margin: 0 auto;
}
.subtitle {
  font-size: 2rem;
  margin-top: 3%;
  color: #000;
}

.content {
  color: #000;
  letter-spacing: -1px;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  height: 1200px;
}
.theme--dark.v-tabs > .v-tabs-bar {
  background-color: #44b259;
  border-radius: 20px;
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
        { tab: "1호선", content: "T1974년 8월 15일에 서울전차를 대체하여 개통된 대한민국 최초의 광역전철이다. 그리고 아시아의 4번째 현대적 지하철이자 광역 전철이기도 하다.", img: "/images/1.png" },
        { tab: "2호선", content: "서울 지하철의 한 노선이자 수도권 전철의 운행계통. 1984년 5월 22일에 완전개통하여 순환선이 되었다. 운영기관은 서울교통공사이며 운행하는 열차는 서울교통공사 2000호대 전동차.", img: "/images/2.png" },
        { tab: "3호선", content: "경기도 고양시 일산서구 대화역에서 서울특별시 송파구 오금역을 잇는 수도권 전철 운행계통. 서울 지하철 3호선과 일산선이 직결한 형태이다. ", img: "/images/3.png" },
        { tab: "4호선", content: "서울 지하철 4호선과 그 북측의 진접선, 남측의 과천선과 안산선이 직결한 수도권 전철의 운행계통이다.", img: "/images/4.png" },
        { tab: "5호선", content: "서울특별시 강서구에서 서울특별시 강동구와 송파구를 연결하고, 하남시까지 이어주는 서울 지하철 2기 지하철 노선이다. ", img: "/images/5.png" },
        { tab: "6호선", content: "서울특별시 은평구 응암동에서 중랑구 신내동을 연결하는 서울 지하철의 2기 노선이다. ", img: "/images/6.png" },
        { tab: "7호선", content: "경기도 의정부시에서 서울특별시를 거쳐 광명시, 그리고 다시 서울시, 부천시, 인천광역시 부평구와 서구까지 연결된 도시철도 노선으로, 서울 지하철, 부천 도시철도, 인천 도시철도 모두에 속한다. ", img: "/images/7.png" },
        { tab: "8호선", content: "서울특별시 강동구에서 경기도 성남시 수정구를 연결하는 서울 지하철의 2기 노선이다. 노선 색은 분홍색으로 색의 뜻은 낭만이다.", img: "/images/8.png" },
        { tab: "9호선", content: "서울특별시 강서구에서 강동구까지 운행 중인 서울 지하철의 한 노선이다. 노선색은 금색이며, 색의 뜻은 힘이다.", img: "/images/9.png" },
      ],
      name: "box1",
    };
  },
};
</script>

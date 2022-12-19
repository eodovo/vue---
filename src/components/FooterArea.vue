<template>
  <v-footer class="footer">
    <p class="copy">서울시 지하철 승하차 정보</p>
    <div class="info">
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <address>
        <p>서울특별시청 04524 서울특별시 중구 세종대로 110</p>
        <p>전화번호 02-120 | 대표전화 02-2133-1271 | 빅데이터담당관(서소문청사)</p>
        <p>2019. Seoul Metropolitan Government Some Rights Reserved.</p>
        <p>개인 포트폴리오 용도 사이트 입니다.</p>
      </address>
    </div>
  </v-footer>
</template>

<style>
address {
  color: #fff;
  line-height: 2em;
}
.copy {
  padding-top: 50px;
  color: #fff;
  font-size: 2em;
  width: 100%;
}
.v-sheet.v-footer {
  background: #44b259;
  border-radius: 60px 60px 0 0;
  justify-content: center;
  margin-top: 100px;
}
.v-data-table > .v-data-table__wrapper > table {
  background: #44b259;
  color: #fff;
  margin: 5% 0;
}
.v-data-table__wrappe {
  background-color: #44b259;
}
.theme--light.v-data-table {
  background-color: #44b259;
}
table:hover,
.v-data-table__wrapper {
  background-color: none;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background-color: #44b259;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
  font-size: 1.2em;
}
</style>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "원본시스템",
          calories: "교통카드 정산시스템",
        },
        {
          name: "제공기관 ",
          calories: "서울특별시",
        },
        {
          name: "저작권자 ",
          calories: "서울특별시, 코레일, 공항철도",
        },
        {
          name: "제공부서",
          calories: "도시교통실 교통기획관 교통정책과",
        },
      ],
    };
  },
};
</script>

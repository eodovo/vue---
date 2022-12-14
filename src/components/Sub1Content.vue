<template>
  <div>
    <h2 class="title">서울시 지하철호선별 역별 승하차 인원 정보</h2>
    <div v-show="message">{{ msgtext }}</div>
    <div class="box">
      <table class="tableContent">
        <caption class="hidden">
          승하차 인원정보
        </caption>
        <thead>
          <tr>
            <th>사용일자</th>
            <th>호선명</th>
            <th>역명</th>
            <th>승차총승객수</th>
            <th>하차총승객수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in subway" :key="i">
            <td>{{ a.use_dt }}</td>
            <td>{{ a.line_num }}</td>
            <td>{{ a.sub_sta_nm }}</td>
            <td>{{ a.ride_pasgr_num + "명" }}</td>
            <td>{{ a.alight_pasgr_num + "명" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
.box {
  padding: 0 10%;
}
.title {
  font-size: 2rem;
  margin: 5% 2%;
}
.tableContent {
  width: 100%;
  margin-bottom: 100px;
}
.tableContent thead tr {
  line-height: 2em;
}
.tableContent thead th {
  border-top: 2px solid #333;
  font-size: 20px;
  padding: 10px;
  border-bottom: 1px solid #333;
}
.tableContent table {
  width: 100%;
}
.tableContent tr th {
  margin-right: 5%;
}

.tableContent tbody {
  line-height: 2em;
  font-size: 18px;
}
</style>
<script>
import jdata from "../subway.json";

export default {
  data() {
    return {
      message: false,
      msgtext: "검색 데이터가 없습니다",
      value: "",
      subway: jdata,
    };
  },
  methods: {
    search: function () {
      let text = this.value;
      if (text) {
        this.naReduce = jdata.filter(function (element) {
          return element.SITE_ADDR.includes(text); //조건에 참이면 객체를 배열로 리턴
        });

        if (this.naReduce.length == 0) {
          this.message = true;
          this.msgtext = "검색 데이터가 없습니다";
        } else {
          this.message = true;
          this.msgtext = this.naReduce.length + "개가 검색되었습니다";
        }
      } else {
        alert("검색어를 입력해주세요!");
      }
    },
  },
};
</script>

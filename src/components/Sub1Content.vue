<template>
  <div>
    <h2 class="title">서울시 지하철호선별 역별 승하차 인원 정보</h2>
    <div>
      <label for="title">지하철 역명 검색서비스</label>
      <v-text-field id="title" type="text" v-model="value" maxlength="14" />
      <div class="btnBox">
        <button @click="search()">검색</button>
        <button @click="forceRerender()">돌아가기</button>
      </div>
    </div>
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
.btnBox {
  margin: 2% 0;
}
.btnBox button {
  font-size: 1.2em;
  font-weight: bold;
  padding: 10px 1%;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 30%);
  transition: all 0.6s ease-in-out;
  border: 2px solid #bbb;
}
.btnBox button:hover {
  transform: scale(1.04);
}
.btnBox button:nth-of-type(1) {
  margin-right: 20px;
  width: 118px;
}
.theme--light.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot:before {
  border-color: #bbb;
}
label {
  font-size: 1.5em;
}
.v-text-field > .v-input__control > .v-input__slot:before,
.v-text-field > .v-input__control > .v-input__slot:after {
  bottom: -1px;
  content: "";
  left: 0;
  position: absolute;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 15%;
  margin-left: 810px;
}
.theme--light.v-input input,
.theme--light.v-input textarea {
  text-align: center;
}
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
    forceRerender() {
      this.value = "";
      this.message = false;
      this.subway = jdata;
    },

    search: function () {
      let text = this.value;
      if (text) {
        this.subway = jdata.filter(function (element) {
          return element.sub_sta_nm.includes(text); //조건에 참이면 객체를 배열로 리턴
        });

        if (this.subway.length == 0) {
          this.message = true;
          this.msgtext = "검색 데이터가 없습니다";
        } else {
          this.message = true;
          this.msgtext = this.subway.length + "개가 검색되었습니다";
        }
      } else {
        alert("검색어를 입력해주세요!");
      }
    },
  },
};
</script>

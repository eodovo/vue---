<template>
  <div id="app">
    <h2 class="title2">FAQ</h2>
    <v-app id="inspire">
      <!-- 이 안에서 작업 -->
      <v-expansion-panels class="box">
        <v-expansion-panel v-for="i in 1" :key="i">
          <v-expansion-panel-header> 2000년~2022년 자료가 필요한데 구할 수 있을까요 </v-expansion-panel-header>
          <v-expansion-panel-content class="answer"> 안녕하세요. 제공중인 데이터 외 별도의 데이터는 없습니다. 감사합니다. </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-for="i in 1" :key="i">
          <v-expansion-panel-header> 판교역(신분당선) 이용객수는 어떻게 알 수 있나요? 경강선 판교역만 떠서요. </v-expansion-panel-header>
          <v-expansion-panel-content class="answer"> 안녕하세요. 환승구간의 경우 기계를 통합으로 관리하는 경우가 있어 모든 호선의 역이 나오지 않을 수 있습니다. 호선과 무관하게 역 이름을 기준으로 사용하시면 됩니다. </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-for="i in 1" :key="i">
          <v-expansion-panel-header> 7호선 일부 역사의 운영 주체가 인천교통공사로 이관이 되어 집계되지 않는다고 하는데 혹시 해당 데이터를 받아볼 수 있는 방법은 따로 없을까요? </v-expansion-panel-header>
          <v-expansion-panel-content class="answer"> 안녕하세요. 이관되어 집계되지 않으므로 더 이상 제공이 불가능합니다. 인천교통공사로 문의해 주시기 바랍니다. 감사합니다. </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-for="i in 1" :key="i">
          <v-expansion-panel-header> A라는 역에서 승차해 B라는 역에서 하차하는 인원을 알 수 있는 방법이 있나요? </v-expansion-panel-header>
          <v-expansion-panel-content class="answer"> 안녕하세요. 본 데이터는 단순히 개찰구를 통해 승차하고 하차하는 인원수만 제공합니다. 문의하신 내용의 경우 승하차하는 인원의 카드정보를 저장하고 있어야 확인 가능한 사항으로, 제공이 어렵습니다. 감사합니다. </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-for="i in 1" :key="i">
          <v-expansion-panel-header> 환승 승객은 승차 후 진행됨으로 승차 시 승객수에 포함되므로 환승은 승차 승객에 추가되지 않는다고 이해하면 될까요 ? </v-expansion-panel-header>
          <v-expansion-panel-content class="answer"> 안녕하세요. 승차와 하차 개념이 개찰구 통과를 기준으로 하므로 문의하신 내용으로 이해하시면 됩니다. 감사합니다. </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-app>
  </div>
</template>
<style>
.v-application--wrap {
  min-height: 60vh;
}
.theme--light.v-application {
  padding: 0 10%;
}
.title2 {
  font-size: 2em;
  margin: 3% 0;
}
.v-expansion-panel-content__wrap {
  padding: 0 24px 16px;
  flex: 1 1 auto;
  max-width: 100%;
  height: 70px;
  line-height: 4em;
}

.v-application--is-ltr .v-expansion-panel-header {
  background-color: #44b259;
  color: #fff;
  margin: 5px 0;
}

.answer {
  text-align: left;
}
</style>
<script>
export default {
  name: "app",
};
</script>

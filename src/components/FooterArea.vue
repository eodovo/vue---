<template>
  <footer>
    <p class="copy">서울시 지하철 승하차 정보</p>
    <hr />
    <div class="info">
      <table>
        <thead class="footerTable">
          <tr>
            <th>원본시스템 :</th>
          </tr>
          <tr>
            <th>제공기관 :</th>
          </tr>
          <tr>
            <th>저작권자 :</th>
          </tr>
          <tr>
            <th>제공부서 :</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>교통카드 정산시스템</td>
            <td>서울특별시</td>
            <td>서울특별시, 코레일, 공항철도</td>
            <td>도시교통실 교통기획관 교통정책과</td>
          </tr>
        </tbody>
      </table>
      <address>
        <p>서울특별시청 04524 서울특별시 중구 세종대로 110</p>
        <p>전화번호 02-120 | 대표전화 02-2133-1271 | 빅데이터담당관(서소문청사)</p>
        <p>2019. Seoul Metropolitan Government Some Rights Reserved.</p>
        <p>개인 포트폴리오 용도 사이트 입니다.</p>
      </address>
    </div>
  </footer>
</template>

<style>
address p {
  width: 580px;
  margin: 1% 0;
}
address {
  float: right;
  color: #fff;
  text-align: left;
}
footer table tbody tr td {
  margin: 1.3% 0;
}
footer table tbody tr {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-left: 5px;
  text-align: left;
  margin: 1% 0;
  width: 300px;
}
footer table tbody {
  float: left;
}
.footerTable {
  float: left;
}
.footerTable th {
  text-align: left;
  width: 100px;
  margin: 4% 0;
  display: inline-block;
  font-size: 16px;
  font-weight: 100;
}
footer table {
  width: 500px;
  display: inline;
}

footer hr {
  margin: 2% 0;
}
footer table {
  color: #fff;
}
footer {
  margin-top: 100px;
  background: #44b259;
  height: 300px;
  border-radius: 60px 60px 0 0;
}

footer .info {
  padding: 0 15% 0 25%;
}

.copy {
  padding-top: 50px;
  color: #fff;
  font-size: 2em;
}
</style>

<script>
export default {};
</script>

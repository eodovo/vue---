<template>
  <header>
    <!-- <router-view></router-view> -->
    <router-link to="/vue" class="logoImage">
      <h1 class="logo">{{ plogo }}</h1>
    </router-link>
    <nav>
      <router-link class="link" to="/vue/main">메인 페이지</router-link>
      <router-link class="link" to="/vue/sub1">승하차 인원정보</router-link>
      <router-link class="link" to="/vue/sub2">FAQ</router-link>
    </nav>
  </header>
</template>

<style>
header {
  height: 100px;
}
.logoImage {
  background-image: url(../assets/logo.png);
  background-repeat: no-repeat;
  background-size: 50px;
  display: block;
  width: 430px;
  height: 50px;
  float: left;
  margin-left: 50px;
  margin-top: 30px;
}
.logo {
  color: #333;
  font-size: 30px;
  margin-left: 60px;
}
nav {
  float: right;
}
.link {
  font-size: 25px;
  color: #333 !important;
  font-weight: bold;
  margin-top: 30px;
  margin-right: 100px;
  display: inline-block;
}
</style>

<script>
export default {
  props: ["plogo"],
};
</script>

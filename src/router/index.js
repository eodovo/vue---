import Vue from "vue";
import Router from "vue-router";
//아래에 연결할 서브페이지(콤퍼넌드)를 import
import main_page from "../main_page.vue";
import Sub1Content from "../components/Sub1Content.vue";
import Sub2Content from "../components/Sub2Content.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: main_page },
    { path: "/main", component: main_page },
    { path: "/sub1", component: Sub1Content },
    { path: "/sub2", component: Sub2Content },
  ],
});

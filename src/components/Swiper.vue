<template>
  <div id="app">
    <h1>안녕~~</h1>
    <div class="box">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="box">
      <swiper class="swiper" :options="swiperOption2">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "App",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOption2: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.swiper {
  height: 100%;
  width: 100%;
}
.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
}
</style>

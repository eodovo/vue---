<template>
  <div id="app">
    <!-- 이 안에서 작업 -->
    <HeaderArea plogo="서울시 지하철 승하차 정보" />
    <MainVisual />
    <router-view></router-view>

    <FooterArea />
  </div>
</template>

<style>
/* 처리하는 css 여기서 처리 */

/*css reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  color: #333;
}

ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

address {
  font-style: normal;
}

a {
  color: #333;
  text-decoration: none;
}

img {
  border: 0;
  vertical-align: top;
}
/* css reset end */

/* common */
.hidden {
  display: block;
  position: absolute;
  left: -1000%;
  width: 1px;
  height: 1px;
  overflow: hidden;
  color: #fff;
}

#skipNav {
  position: absolute;
  width: 100%;
  overflow: hidden;
  z-index: 60;
}

#skipNav a {
  display: block;
  height: 1px;
  margin-bottom: -1px;
  font-size: 1.2em;
  color: #333;
  overflow: hidden;
  text-align: center;
}

#skipNav a:hover,
#skipNav a:focus,
#skipNav a:active {
  height: auto;
  padding: 10px 0;
  background: #f2f2f2;
}

.wrap {
  width: 100%;
  overflow: hidden;
}
/* common end*/

/* css */
body {
  font-size: 16px;
  color: #333;
}
a {
  color: #333;
  text-decoration: none;
}
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.head {
  color: red;
}
.rimg {
  width: 90%;
  margin: 15px auto;
}
h4 {
  font-size: 24px;
  margin: 15px 0;
}
p {
  font-size: 18px;
}
</style>

<script>
//외부파일은 무조건 import로 가져와야 함
import HeaderArea from "./components/HeaderArea";
import MainVisual from "./components/MainVisual";
import FooterArea from "./components/FooterArea";

export default {
  //인스턴스라 생각
  name: "app",
  components: {
    HeaderArea,
    MainVisual,
    FooterArea,
  },
};
</script>

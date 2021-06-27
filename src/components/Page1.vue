<template>
  <div class="parent">
    <div class="box1">Box1</div>
    <div class="box2">Box2</div>
    <div class="box3">Box3</div>
    <div class="box4">Box4</div>
    <div class="box5">Box5</div>
    <div class="box6">Box6</div>
    <div class="box7">Box7</div>
    <div class="box8">Box8</div>
  </div>
</template>
<style scoped>
.parent {
  display: flex;
  flex-flow: row wrap;
  column-gap: 20px;
  row-gap: 20px;
}
.box1 {
  height: 100px;
  width: 100px;
  background: khaki;
  flex-grow: 1;
}
.box2 {
  height: 100px;
  width: 100px;
  flex-grow: 1;
  background: rgb(201, 91, 192);
}
.box3 {
  height: 100px;
  width: 100px;
  background: rgb(148, 141, 75);
  flex-grow: 1;
}
.box4 {
  height: 100px;
  width: 100px;
  background: rgb(51, 58, 73);
  flex-grow: 1;
}
.box5 {
  height: 100px;
  width: 100px;
  background: rgb(73, 18, 23);
  flex-grow: 1;
}
.box6 {
  height: 100px;
  width: 100px;
  background: rgb(73, 18, 23);
  flex-grow: 1;
}
.box7 {
  height: 100px;
  width: 100px;
  background: rgb(73, 18, 23);
  flex-grow: 1;
}
.box8 {
  height: 100px;
  width: 100px;
  background: rgb(73, 18, 23);
}
</style>
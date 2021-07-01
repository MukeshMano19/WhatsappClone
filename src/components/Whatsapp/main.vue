<template>
  <div class="whatsapp">
    <div class="title-bar"></div>

    <!-- Left Stuff -->
    <div class="left-part">
      <div class="profile"></div>
      <div class="search"></div>
      <div class="contacts"></div>
    </div>

    <!-- Right Stuff -->
    <div class="right-part">
      <div class="recepient-header"></div>
      <div class="recepient-messages"></div>
      <div class="send-bar"></div>
    </div>
  </div>
</template>

// Javascript
<script>
export default {};
</script>

// style
<style>
.whatsapp {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-areas: "title title" "left-bar right-bar";
}

.whatsapp .title-bar {
  background: rgb(61, 100, 61);
  height: 30px;
  grid-area: title;
}

/* Left Part */
.whatsapp .left-part {
  grid-area: left-bar;
  height: 710px;
}

.whatsapp .left-part .profile {
   height: 60px;
   background: sandybrown; 
}

.whatsapp .left-part .search {
   height: 50px;
   background: rgb(71, 67, 64); 
}

.whatsapp .left-part .contacts {
   height: 600px;
   background: rgb(24, 126, 121); 
}

/* Right Part */
.whatsapp .right-part {
  grid-area: right-bar;
  height: 710px;
}

.whatsapp .right-part .recepient-header {
   height: 60px;
   background: rgb(13, 187, 143); 
}

.whatsapp .right-part .recepient-messages {
   height: 600px;
   background: rgb(233, 230, 228); 
}

.whatsapp .right-part .send-bar {
   height: 50px;
   background: rgb(16, 34, 33); 
}
</style>
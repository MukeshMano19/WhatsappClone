<template>
  <div class="whatsapp">
    <div class="title-bar"></div>

    <!-- Left Stuff -->
    <div class="left-part">
      <div class="profile"></div>

      <div class="search"></div>

      <div class="contacts">
        <contact-list></contact-list>
      </div>
    </div>

    <!-- Right Stuff -->
    <div class="right-part">
      <div class="recepient-header"></div>
      <div class="recepient-messages">
        <conversations></conversations>
      </div>
      <div class="send-bar"></div>
    </div>
  </div>
</template>

// Javascript
<script>
import ContactList from "./contacts.vue";
import Conversations from "./Conversations.vue";
export default {
  components: {
    ContactList,
    Conversations,
  },
  methods: {
    array() {
      let contacts = [
        {
          name: "Mukesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
          count: 3,
          add: true,
        },
        {
          name: "Harish",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
          count: 19,
          add: false
        },
        {
          name: "Vignesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
          count: 6,
          add: true,
        },
      ];

      // Basic FOR Loop
      // for (var i = 0; i < contacts.length; i++) {
      //   console.log(i, contacts[i]);
      // }

      // console.log("============== For Each ==============");
      // contacts.forEach((e) => {
      //   console.log(e);
      // });

      // console.log("============= Map ===============");

      // contacts.map((e) => {
      //   if (e.name == "Mukesh") {
      //     e.lastText = "123456";
      //   }
      //   return e;
      // });

      // console.log("============= Reduce ===============");
      // const initialVal = 0;

      // const result1 = contacts.reduce(function (acc, item) {
      //   return (acc += item.count);
      // }, initialVal);

      // const names = []
      // const result2 = contacts.reduce(function (acc, item) {
      //    acc.push(item.name)
      //    return acc
      // }, names)

      // const result3 = contacts.reduce(function (acc, item) {
      //   if(!item.add) {
      //     acc += item.count
      //   }
      //   return acc;
      // }, 0);

      // console.log(result3);

      console.log("============= Sort ===============");
            
      contacts.sort((a, b) => {
        if(a.count > b.count) return 1
        return -1
      })

      console.log(contacts)
    },
  },
  created() {
    this.array();
  },
};
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
  min-height: 600px;
  max-height: 600px;
  overflow: auto;
  /* background: rgb(24, 126, 121);  */
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
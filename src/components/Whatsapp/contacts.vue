<template>
  <div>
    <div class="contact" v-for="contact in contacts" :key="contact">
      <div class="dp">
        <img :src="contact.dp" />
      </div>
      <div class="name">{{ contact.name }}</div>
      <div class="last-text">{{ contact.lastText }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contacts: [
        {
          name: "Mukesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Harish",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Vignesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "SriRam",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Sujitha",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
          name: "Vaibhav",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Mukesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Harish",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Vignesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "SriRam",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Sujitha",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
          name: "Vaibhav",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Mukesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Harish",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Vignesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "SriRam",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Sujitha",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
          name: "Vaibhav",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Mukesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Harish",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Vignesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "SriRam",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Sujitha",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
          name: "Vaibhav",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Mukesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Harish",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Vignesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "SriRam",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Sujitha",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
          name: "Vaibhav",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Mukesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Harish",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Vignesh",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "SriRam",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          name: "Sujitha",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar2.png",
        },
        {
          name: "Vaibhav",
          lastText: "Hi da, How are you?",
          dp: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
    };
  },
};
</script>
<style>
.contact {
  height: 70px;
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-areas: "dp name" "dp lt";
}

.contact .dp {
  grid-area: dp;
}

.contact .dp img {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 10px;
}

.contact .name {
  grid-area: name;
  padding: 10px 10px 0px 10px;
  font-size: 18px;
  font-weight: 600;
}

.contact .last-text {
  grid-area: lt;
  padding-left: 10px;
  color: gray;
  border-bottom: 0.2px solid grey;
}
</style>
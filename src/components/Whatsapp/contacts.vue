<template>
  <div>
    <div
      class="contact"
      v-for="(contact, idx) in contacts"
      :key="idx"
      @click="selectContact(contact)"
    >
      <div class="dp">
        <img :src="contact.dp" />
      </div>
      <div class="name">{{ contact.name }}</div>
      <div class="last-text">{{ contact.lastText }}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setSelectedContact"]),

    selectContact(contact) {
      console.log(contact);
      console.log("calling in contacts list");
      this.setSelectedContact(contact);
    },
  },
  computed: {
    ...mapState(["contacts"]),
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
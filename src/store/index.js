import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // Assume it's fetched from server
        contacts: [{
                name: "Mukesh",
                lastText: "Hi da, How are you?",
                dp: "https://www.w3schools.com/howto/img_avatar.png",
                messages: []
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
        value1: [],
        value2: [],
        selectedContact: {}
    },
    mutations: {
        setSelectedContact(state, data) {
            console.log("calling in vuex store")
            state.selectedContact = data
        }
    },
    actions: {},
    modules: {}
})
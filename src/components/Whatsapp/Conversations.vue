<template>
    <h1 class="">{{selectedContact}}</h1>
</template>

<script>
import {mapState} from "vuex"

export default {
    computed: {
        ...mapState(["selectedContact"])
    }
}
</script>

<style>

</style>
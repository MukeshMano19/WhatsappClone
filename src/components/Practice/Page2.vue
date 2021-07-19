<template>
  <div class="grid">
    <template v-for="i in 20">
      <img
      :key="i"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTK500IQ_2NpiNk7Ed_4phbWDtLSZ7QGWuNA&usqp=CAU"
      >
    </template>
  </div>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
}

.grid img {
  width: 100%;
}
</style>
<template>
  <div class="hitung-insentif">
    <div class="menu__title">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "hitung insentif",
    };
  },
};
</script>

<style scoped>
.hitung-insentif {
  width: 100%;
  background-color: #f8f8f8;
}

.menu__title {
  padding: 20px;
}
</style>

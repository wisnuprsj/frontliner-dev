<template>
  <div class="parameter-rumus">
    <div class="menu__title">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "parameter rumus",
    };
  },
};
</script>

<style scoped>
.parameter-rumus {
  width: 100%;
  background-color: #f8f8f8;
}

.menu__title {
  padding: 20px;
}
</style>

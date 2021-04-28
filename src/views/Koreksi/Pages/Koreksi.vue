<template>
  <div class="koreksi">
    <div class="koreksi__title">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>
    <div class="koreksi__parameter">
      <div class="koreksi__parameter-wrapper">
        <koreksi-form />
      </div>
    </div>
    <div class="koreksi__detail">
      <koreksi-grid />
    </div>
  </div>
</template>

<script>
import KoreksiForm from "../Components/KoreksiForm";
import KoreksiGrid from "../Components/KoreksiGrid";

export default {
  components: {
    "koreksi-form": KoreksiForm,
    "koreksi-grid": KoreksiGrid,
  },
  data() {
    return {
      title: "koreksi",
    };
  },
};
</script>

<style scoped>
.koreksi {
  width: 100%;
  background-color: #f8f8f8;
}

.koreksi__title {
  padding: 20px;
}

.koreksi__parameter {
  width: 100%;
  text-align: center;
  padding: 20px 20px 20px 100px;
}

.koreksi__parameter-wrapper {
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px 10px 10px 10px;
  padding: 20px 20px 20px 20px;
}

.koreksi__detail {
  width: 100%;
  text-align: center;
  padding: 20px 20px 20px 20px;
}
</style>

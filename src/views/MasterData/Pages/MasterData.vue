<template>
  <div class="master-data">
    <div class="master-data__title">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>

    <div class="master-data__parameter">
      <div class="master-data__parameter-wrapper">
        <master-data-form />
      </div>
    </div>
  </div>
</template>

<script>
import MasterDataForm from "../Components/MasterDataForm";

export default {
  components: {
    "master-data-form": MasterDataForm,
  },
  data() {
    return {
      title: "master data",
    };
  },
};
</script>

<style scoped>
.master-data {
  width: 100%;
  background-color: #f8f8f8;
}

.master-data__title {
  padding: 20px;
}

.master-data__parameter {
  width: 100%;
  text-align: center;
  padding: 20px 20px 20px 100px;
}

.master-data__parameter-wrapper {
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 20px 5px 20px 20px;
}

.master-data__parameter-wrapper form {
  width: 600px;
  padding: 20px;
}
</style>

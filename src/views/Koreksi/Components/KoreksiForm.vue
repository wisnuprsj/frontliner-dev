<template>
  <form>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="periode-insentif"
        >Periode Insentif :</label
      >
      <div class="col-sm-3">
        <vue-monthly-picker
          id="periode-insentif"
          type="month"
          v-model="selectedMonth"
          placeHolder="Pick a month"
          dateFormat="MMMM YYYY"
        />
      </div>
      <div class="col-sm-2"></div>
    </div>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="data-upload"
        >Data Upload :</label
      >
      <div class="col-sm-3">
        <input id="data-upload" type="text" class="form-control" />
      </div>
      <div class="col-sm-2">
        <base-button classes="button spread" type="button">BROWSE</base-button>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-3"></div>
      <div class="col-sm-3">
        <base-button classes="button spread" type="button">UPLOAD</base-button>
      </div>
      <div class="col-sm-2"></div>
    </div>
  </form>
</template>

<script>
import BaseButton from "../../../components/UI/BaseButton";
import VueMonthlyPicker from "vue-monthly-picker";

export default {
  components: {
    "base-button": BaseButton,
    "vue-monthly-picker": VueMonthlyPicker,
  },
  data() {
    return {
      selectedMonth: "",
    };
  },
};
</script>

<style scoped>
.form-group label {
  text-align: end;
}

form {
  width: 800px;
  padding: 20px;
}

#periode-insentif :nth-child(1) {
  min-width: inherit !important;
}
</style>

<template>
  <form>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="periode-insentif"
        >Periode Insentif :</label
      >
      <div class="col-sm-4">
        <vue-monthly-picker
          id="periode-insentif"
          type="month"
          v-model="selectedMonth"
          placeHolder="Pick a month"
          dateFormat="MMMM YYYY"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="jenis-data"
        >Jenis Data :</label
      >
      <div class="col-sm-4">
        <input id="jenis-data" type="text" class="form-control" />
      </div>
      <div class="col"></div>
    </div>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="portfolio">Portfolio :</label>
      <div class="col-sm-4">
        <input id="portfolio" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-3"></div>
      <div class="col-sm-4">
        <base-button classes="button spread" type="button"
          >DOWNLOAD</base-button
        >
      </div>
      <div class="col"></div>
    </div>
    <!-- <base-button classes="button btn-3" type="button">BROWSE</base-button> -->
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

#periode-insentif :nth-child(1) {
  min-width: inherit;
}
</style>

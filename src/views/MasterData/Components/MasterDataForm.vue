<template>
  <form>
    <div class="form-group row">
      <label class="col-sm-4 col-form-label" for="periode-insentif"
        >Periode Insentif :</label
      >
      <div class="col-sm-5">
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
      <label class="col-sm-4 col-form-label" for="portfolio">Portfolio :</label>
      <div class="col-sm-5">
        <input
          id="portfolio"
          type="text"
          class="form-control"
          placeholder="Portfolio"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-4 col-form-label" for="regional">Regional :</label>
      <div class="col-sm-5">
        <input
          id="regional"
          type="text"
          class="form-control"
          placeholder="Regional"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-4 col-form-label" for="branch">Branch :</label>
      <div class="col-sm-5">
        <input
          id="branch"
          type="text"
          class="form-control"
          placeholder="Branch"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-4"></div>
      <div class="col-sm-5">
        <base-button classes="button spread" type="button"
          >DOWNLOAD</base-button
        >
      </div>
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
</style>

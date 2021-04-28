<template>
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group row">
          <label class="col-sm-6 col-form-label" for="periode-insentif"
            >Periode Insentif :</label
          >
          <div class="col-sm-5 text-nowrap">
            <vue-monthly-picker
              id="periode-insentif"
              type="month"
              v-model="selectedMonth"
              placeHolder="Pick a month"
              dateFormat="MMMM YYYY"
            />
          </div>
          <div class="col-sm-3"></div>
        </div>
        <div class="form-group row">
          <label class="col-sm-6 col-form-label" for="portfolio"
            >Portfolio :</label
          >
          <div class="col-sm-5">
            <input id="portfolio" type="text" class="form-control" />
          </div>
        </div>
        <div class="col-sm-3">&nbsp;</div>
      </div>
      <div class="col-md-6">
        <div class="form-group row">
          <label class="col col-form-label" for="jenis-data"
            >Jenis Data :</label
          >
          <div class="col">
            <input id="jenis-data" type="text" class="form-control" />
          </div>
          <div class="col-sm-3">&nbsp;</div>
        </div>
        <div class="form-group row">
          <label class="col col-form-label" for="data-upload"
            >Data Upload :</label
          >
          <div class="col">
            <input id="data-upload" type="text" class="form-control" />
          </div>
          <div class="col-sm-3">
            <base-button classes="button spread" type="button"
              >BROWSE</base-button
            >
          </div>
        </div>
        <div class="form-group row">
          <div class="col"></div>
          <div class="col">
            <base-button classes="button spread" type="button"
              >UPLOAD</base-button
            >
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
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

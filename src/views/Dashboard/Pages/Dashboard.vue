<template>
  <div class="dashboard">
    <div class="dashboard__title">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>
    <div class="dashboard__parameter">
      <div class="dashboard__parameter-wrapper">
        <form v-on:submit.prevent="handleSubmit">
          <div class="form-group row">
            <label class="col-sm-4 col-form-label" for="periode-insentif"
              >Periode Insentif :</label
            >
            <div class="col-sm-7">
              <vue-monthly-picker
                id="periode-insentif"
                type="month"
                v-model="selectedMonth"
                placeHolder="Pick a month"
                dateFormat="MMMM YYYY"
              />
            </div>
          </div>
          <div class="form-group row justify-content-end">
            <div class="col-md-7">
              <base-button classes="button btn-3" type="submit"
                >LIHAT PROGRESS</base-button
              >
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="dashboard__status">
      <card-status v-for="status in listStatus" v-bind:key="status.statusType">
        <template v-slot:header>
          <p>{{ listDescription[status.statusType].toUpperCase() }}</p>
        </template>
        <template v-slot:body>
          <i
            class="fas fa-check-circle fa-5x approved"
            v-if="status.isAccepted"
          ></i>
          <i class="fas fa-exclamation-circle fa-5x warning" v-else></i>
          <div class="card__footer">
            <p>
              {{ new Date().toDateString() }}
            </p>
          </div>
        </template>
      </card-status>
    </div>
  </div>
</template>

<script>
import CardStatus from "../Components/CardStatus";
import BaseButton from "../../../components/UI/BaseButton";
import VueMonthlyPicker from "vue-monthly-picker";

export default {
  components: {
    "base-button": BaseButton,
    "card-status": CardStatus,
    "vue-monthly-picker": VueMonthlyPicker,
  },
  data() {
    return {
      title: "dashboard",
      listStatus: [
        {
          statusType: 0,
          isAccepted: true,
        },
        {
          statusType: 1,
          isAccepted: true,
        },
        {
          statusType: 2,
          isAccepted: false,
        },
      ],
      listDescription: ["upload & download data", "hitung insentif", "closing"],
      selectedMonth: "",
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
    },
  },
};
</script>

<style>
.dashboard {
  width: 100%;
  background-color: #f8f8f8;
}

.dashboard__title {
  padding: 20px;
}

.dashboard__parameter {
  width: 100%;
  text-align: center;
  padding: 20px 20px 20px 100px;
}

.dashboard__parameter-wrapper {
  width: 450px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 20px 5px 20px 20px;
}

.parameter {
  display: flex;
  width: 100%;
}

.dashboard__status {
  display: flex;
  padding: 20px 0px;
  justify-content: space-evenly;
}

.dashboard__status h4 {
  font-weight: bold;
}

.dashboard__status .approved {
  color: green;
}

.dashboard__status .warning {
  color: red;
}

.dashboard__status .card__footer {
  margin-top: 50px;
}
</style>

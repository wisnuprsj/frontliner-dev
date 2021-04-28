<template>
  <div class="closing">
    <div class="closing__title">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>
    <div class="closing__parameter">
      <div class="closing__parameter-wrapper">
        <closing-form v-on:submit="handleSubmit" />
      </div>
    </div>
    <div class="closing__detail">
      <div class="closing__detail-header">
        {{ getPeriodeInsentif }}
      </div>
      <closing-grid />
    </div>
  </div>
</template>

<script>
import ClosingForm from "../Components/ClosingForm";
import ClosingGrid from "../Components/ClosingGrid";

export default {
  components: {
    "closing-form": ClosingForm,
    "closing-grid": ClosingGrid,
  },
  data() {
    return {
      title: "closing",
      date: "",
    };
  },
  methods: {
    handleSubmit(event, formData) {
      this.date = formData.selectedMonth;
    },
  },
  computed: {
    getPeriodeInsentif: function() {
      if (this.date) {
        const options = { month: "long", year: "numeric" };
        const date = new Date(this.date);
        return date.toLocaleDateString("id-ID", options);
      }
      return "";
    },
  },
};
</script>

<style scoped>
.closing {
  width: 100%;
  background-color: #f8f8f8;
}

.closing__title {
  padding: 20px;
}

.closing__parameter {
  width: 100%;
  text-align: center;
  padding: 20px 20px 20px 100px;
}

.closing__parameter-wrapper {
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px 10px 10px 10px;
  padding: 20px 20px 20px 20px;
}

.closing__detail {
  width: 60%;
  margin-left: 100px;
  text-align: center;
  padding: 20px 20px 20px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.closing__detail-header {
  text-align: start;
  padding: 0px 50px;
}
</style>

<template>
  <div class="report">
    <div class="menu__title">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>

    <div class="report__parameter">
      <div class="report__parameter-options row">
        <div class="form-check form-check-inline col mr-0 pr-0">
          <input
            class="form-check-input"
            type="checkbox"
            name="report-insentif"
            id="report-insentif"
          />
          <label class="form-check-label" for="report-insentif"
            >Report Insentif</label
          >
        </div>
        <div class="form-check form-check-inline col mr-0 pr-0">
          <input
            class="form-check-input"
            type="checkbox"
            name="report-history-koreksi"
            id="report-history-koreksi"
          />
          <label class="form-check-label" for="report-history-koreksi"
            >Report History Koreksi</label
          >
        </div>
        <div class="form-check form-check-inline col mr-0 pr-0">
          <input
            class="form-check-input"
            type="checkbox"
            name="crystal-report"
            id="crystal-report"
          />
          <label class="form-check-label" for="crystal-report"
            >Crystal Report</label
          >
        </div>
        <div class="form-check form-check-inline col mr-0 pr-0">
          <input
            class="form-check-input"
            type="checkbox"
            name="report-history-rumus"
            id="report-history-rumus"
          />
          <label class="form-check-label" for="report-history-rumus"
            >Report History Rumus</label
          >
        </div>
      </div>
      <div class="report__parameter-wrapper">
        <report-form />
      </div>
    </div>
  </div>
</template>

<script>
import ReportForm from "../Components/ReportForm";

export default {
  components: {
    "report-form": ReportForm,
  },
  data() {
    return {
      title: "report",
    };
  },
};
</script>

<style scoped>
.report {
  width: 100%;
  background-color: #f8f8f8;
}

.menu__title {
  padding: 20px;
}

.report__parameter {
  width: 100%;
  text-align: center;
  padding: 0px 20px 20px 80px;
}

.report__parameter-wrapper {
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px 10px 10px 10px;
  padding: 20px 5px 20px 20px;
}

.report__parameter-options {
  padding: 20px;
}
</style>

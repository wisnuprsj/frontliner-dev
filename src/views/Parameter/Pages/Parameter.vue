<template>
  <div class="param">
    <div class="menu__title">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>
    <div class="param__parameter">
      <div class="param__parameter-option">
        <base-button
          v-bind:classes="tabOneStatus"
          v-on:click="handleClick"
          v-bind:naming="'btn1'"
          >UPDATE PARAMETER</base-button
        >
        <base-button
          v-bind:classes="tabTwoStatus"
          v-on:click="handleClick"
          v-bind:naming="'btn2'"
          >HISTORY PARAMETER</base-button
        >
      </div>
      <div class="param__parameter-wrapper">
        <keep-alive>
          <update-parameter-form v-if="show" />
          <history-parameter-form v-else />
        </keep-alive>
      </div>
    </div>

    <div class="param__detail" v-if="!show">
      <keep-alive>
        <history-grid />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UpdateParameterForm from "../Components/UpdateParameterForm";
import HistoryParameterForm from "../Components/HistoryParameterForm";
import HistoryGrid from "../Components/HistoryGrid";
import BaseButton from "../../../components/UI/BaseButton";

export default {
  components: {
    "update-parameter-form": UpdateParameterForm,
    "history-parameter-form": HistoryParameterForm,
    "history-grid": HistoryGrid,
    "base-button": BaseButton,
  },
  data() {
    return {
      title: "parameter",
      show: true,
    };
  },
  methods: {
    handleClick(event, naming) {
      if (this.show && naming === "btn2") {
        this.show = !this.show;
      } else if (!this.show && naming === "btn1") {
        this.show = !this.show;
      }
    },
  },
  computed: {
    tabOneStatus() {
      return this.show ? `tab active` : "tab";
    },
    tabTwoStatus() {
      return !this.show ? `tab active` : "tab";
    },
  },
};
</script>

<style scoped>
.param {
  width: 100%;
  background-color: #f8f8f8;
}

.menu__title {
  padding: 20px;
}

.param__parameter {
  width: 100%;
  text-align: center;
  padding: 0px 20px 20px 80px;
}

.param__parameter-wrapper {
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 0px 10px 10px 10px;
  padding: 20px 5px 20px 20px;
}

.param__detail {
  width: 100%;
  text-align: center;
  padding: 20px 20px 20px 20px;
}

.param__parameter-option {
  display: flex;
}
</style>

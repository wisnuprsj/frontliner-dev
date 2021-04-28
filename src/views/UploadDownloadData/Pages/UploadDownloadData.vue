<template>
  <div class="updown-data">
    <div class="updown-data__title">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>
    <div class="updown-data__parameter">
      <div class="updown-data__parameter-option">
        <base-button
          v-bind:classes="tabOneStatus"
          v-on:click="handleClick"
          v-bind:naming="'btn1'"
          >UPLOAD</base-button
        >
        <base-button
          v-bind:classes="tabTwoStatus"
          v-on:click="handleClick"
          v-bind:naming="'btn2'"
          >DOWNLOAD</base-button
        >
      </div>
      <div class="updown-data__parameter-wrapper">
        <keep-alive>
          <upload-form v-if="show" />
          <download-form v-else />
        </keep-alive>
      </div>
    </div>

    <div class="updown-data__detail" v-if="show">
      <upload-grid />
    </div>
  </div>
</template>

<script>
import UploadForm from "../Components/UploadForm";
import DownloadForm from "../Components/DownloadForm";
import UploadGrid from "../Components/UploadGrid";
import BaseButton from "../../../components/UI/BaseButton";

export default {
  components: {
    "upload-form": UploadForm,
    "download-form": DownloadForm,
    "upload-grid": UploadGrid,
    "base-button": BaseButton,
  },
  data() {
    return {
      title: "upload dan download data",
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
.updown-data {
  width: 100%;
  background-color: #f8f8f8;
}

.updown-data__title {
  padding: 20px;
}

.updown-data__parameter {
  width: 100%;
  text-align: center;
  padding: 20px 20px 20px 100px;
}

.updown-data__parameter-wrapper {
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 0px 10px 10px 10px;
  padding: 20px 5px 20px 20px;
}

.updown-data__parameter-wrapper form {
  /* width: 700px; */
  padding: 20px;
}

.updown-data__detail {
  width: 100%;
  text-align: center;
  padding: 20px 20px 20px 20px;
}

.updown-data__parameter-option {
  display: flex;
}
</style>

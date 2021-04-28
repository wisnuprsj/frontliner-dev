<template>
  <form>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="parameter">Parameter :</label>
      <div class="col-sm-4">
        <input
          id="parameter"
          type="text"
          class="form-control"
          placeholder="Parameter"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-3 col-form-label" for="nama-file">Nama File :</label>
      <div class="col-sm-4">
        <input
          id="nama-file"
          type="text"
          class="form-control"
          placeholder="Filename"
        />
      </div>
      <div class="col-sm-3">
        <base-button classes="button spread" type="button">BROWSE</base-button>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-3"></div>
      <div class="col-sm-4">
        <base-button classes="button spread" type="button">UPLOAD</base-button>
      </div>
      <div class="col"></div>
    </div>
  </form>
</template>

<script>
import BaseButton from "../../../components/UI/BaseButton";

export default {
  components: {
    "base-button": BaseButton,
  },
};
</script>

<style scoped>
.form-group label {
  text-align: end;
}

form {
  width: 700px;
  padding: 20px;
}
</style>

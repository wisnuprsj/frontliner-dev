<template>
  <form>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="parameter">Parameter :</label>
      <div class="col-sm-3">
        <input
          id="parameter"
          type="text"
          class="form-control"
          placeholder="Parameter"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Periode :</label>
      <div class="col-sm-3">
        <input
          id="periode-before"
          type="text"
          class="form-control"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
          placeholder="YYYY-MM-DD"
        />
      </div>
      <label class="col-sm-1 col-form-label" for="nama-file">s.d.</label>
      <div class="col-sm-3">
        <input
          id="periode-after"
          type="text"
          class="form-control"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
          placeholder="YYYY-MM-DD"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-2"></div>
      <div class="col-sm-3">
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
  width: 100%;
  padding: 20px;
}
</style>

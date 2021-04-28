<template>
  <div class="login">
    <login-card>
      <template v-slot:default>
        <div class="login__header">
          <img src="@/assets/images/logo-adira.png" alt="logo" />
        </div>

        <form v-on:submit="submitForm">
          <div class="login__user">
            <input
              type="text"
              name="nik"
              class="form-control"
              placeholder="NIK"
              v-model="nik"
            />
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
            <base-button type="submit" classes="btn-login">
              Login
            </base-button>
          </div>
        </form>
      </template>
    </login-card>
  </div>
</template>

<script>
import LoginCard from "../components/LoginCard";
import BaseButton from "../../../components/UI/BaseButton";

export default {
  components: { "login-card": LoginCard, "base-button": BaseButton },
  props: ["value"],
  data() {
    return {
      title: "Login Page",
      nik: "",
      password: "",
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      this.$router.push({ path: "/" });
    },
  },
  created() {
    this.$emit("input", false);
  },
  destroyed() {
    this.$emit("input", true);
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  width: 100vw;
  padding: 30vh 0;
  text-align: center;
  background-color: #fbd46d;
}

.login__header {
  padding: 20px;
}

.login__header img {
  width: 300px;
  height: 100%;
}

.login__user {
  padding: 0 50px 50px 50px;
}

input {
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  color: #212529;
  background-color: #fbd46d;
  border-color: #fff;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  outline: none;
}

button:hover {
  color: #212529;
  background-color: #ffcb74;
  border-color: #fff;
}

.button:focus,
.button.focus {
  box-shadow: 0 0 0 0.2rem rgba(91, 194, 194, 0.5);
}
</style>

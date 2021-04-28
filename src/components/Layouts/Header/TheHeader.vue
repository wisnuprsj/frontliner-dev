<template>
  <div class="header">
    <div class="header__logo">
      <img src="@/assets/images/logo-adira.png" alt="logo" />
    </div>
    <div class="header__content">
      <div class="header__content-wrapper">
        <div class="user">
          <p>{{ "username" }} : {{ "10003753" }}</p>
        </div>
        <div class="auth">
          <BaseButton
            type="button"
            classes="button btn-4"
            danger
            v-on:click="handleLogOut"
            >LOG OUT</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../UI/BaseButton";

export default {
  components: {
    BaseButton,
  },
  methods: {
    handleLogOut() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  margin: 0;
  background-color: #fbd46d;
}

.header__logo {
  width: 380px;
  margin: 0;
}

.header__logo img {
  width: 300px;
  height: 100%;
  padding: 10px;
}

@media (max-width: 1366px) {
  .header__logo img {
    width: 260px;
    height: 100%;
  }
}

.header__content {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0;
  padding: 30px;
}

.header__content-wrapper {
  display: flex;
  margin: 0;
  width: 380px;
  justify-content: space-evenly;
}

.user {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  width: 200px;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  display: flex;
  justify-content: center;
}

.user p {
  font-size: 14px;
  margin: 0;
  padding: 0;
}
</style>

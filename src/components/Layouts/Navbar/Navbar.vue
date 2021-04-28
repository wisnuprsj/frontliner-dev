<template>
  <div class="sidebar">
    <div class="title-menu">
      <span>{{ title.toUpperCase() }}</span>
    </div>
    <ul>
      <navbar-item
        v-for="menu in listMenu"
        v-bind:key="menu.title"
        v-bind:link="menu.href"
        v-bind:title="menu.title"
        v-bind:icon="menu.icon"
      >
      </navbar-item>
    </ul>
  </div>
</template>

<script>
import NavbarItem from "./NavbarItem";

export default {
  components: {
    "navbar-item": NavbarItem,
  },
  props: {
    title: String,
    listMenu: Array,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0px 0px 20px;
}

.sidebar {
  height: 100vh;
  background-color: #52d681;
  width: 380px;
}

.sidebar .title-menu {
  padding: 20px;
  font-size: 22px;
  font-weight: bold;
}

.sidebar .title-menu span {
  font-size: 1.25rem !important;
}

@media (max-width: 1366px) {
  .sidebar .title-menu {
    font-size: 16px;
  }

  .sidebar {
    width: 350px;
  }
}
</style>

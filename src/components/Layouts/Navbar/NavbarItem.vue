<template>
  <router-link
    v-bind:to="link"
    custom
    v-slot="{ navigate, isActive, isExactActive }"
    tag="li"
  >
    <li
      v-on:click="navigate"
      v-bind:class="[
        isActive && 'router-link-active',
        isExactActive && 'router-link-exact-active',
      ]"
      v-on:keypress.enter="navigate"
      role="link"
    >
      <i v-bind:class="icon"></i> <span>{{ title.toUpperCase() }}</span>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    icon: String,
  },
};
</script>

<style scoped>
i {
  margin-right: 10px;
}

li {
  padding: 10px 40px 10px 20px;
  background-color: white;
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

li:hover {
  background-color: #f6f578;
}

a {
  width: 100%;
}

li.router-link-exact-active {
  background-color: #f6f578;
  color: #00ad7c;
}

li.router-link-exact-active i {
  color: #00ad7c;
}
</style>

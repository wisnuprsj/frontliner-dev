<template>
  <div id="app">
    <the-header v-if="sidebarActive" />
    <div class="global-wrapper">
      <div class="global-wrapper__content">
        <navigation-bar
          v-bind:listMenu="menu"
          v-bind:title="title"
          v-if="sidebarActive"
        />
        <transition name="fade" mode="out-in" type="transition">
          <router-view v-model="sidebarActive" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/Layouts/Header/TheHeader";
import Navbar from "./components/Layouts/Navbar/Navbar";

export default {
  name: "App",
  components: {
    "navigation-bar": Navbar,
    "the-header": TheHeader,
  },
  data() {
    return {
      title: "sistem insentif",
      menu: [
        {
          href: "/front-liner-incentif",
          title: "beranda",
          icon: "fa fa-home",
        },
        {
          href: "/front-liner-incentif/updowndata",
          title: "upload & download data",
          icon: "fa fa-archive",
        },
        {
          href: "/front-liner-incentif/hitunginsentif",
          title: "hitung insentif",
          icon: "fa fa-calculator",
        },
        {
          href: "/front-liner-incentif/masterdata",
          title: "master data",
          icon: "fa fa-coins",
        },
        {
          href: "/front-liner-incentif/parameterrumus",
          title: "parameter rumus",
          icon: "fa fa-sliders-h",
        },
        {
          href: "/front-liner-incentif/parameter",
          title: "parameter",
          icon: "fa fa-cogs",
        },
        {
          href: "/front-liner-incentif/koreksi",
          title: "koreksi",
          icon: "fa fa-clipboard-check",
        },
        {
          href: "/front-liner-incentif/closing",
          title: "closing",
          icon: "fa fa-times-circle",
        },
        {
          href: "/front-liner-incentif/report",
          title: "report",
          icon: "fa fa-file-invoice",
        },
      ],
      sidebarActive: true,
    };
  },
  provide() {
    return {
      sidebarActive: this.sidebarActive,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  font-family: "Poppins", sans-serif;
}

p,
span {
  margin: 0px;
  padding: 0px;
}

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.global-wrapper {
  width: 100%;
}

.global-wrapper__content {
  display: flex;
  width: 100%;
}

div.menu__title h1 {
  font-size: 2rem;
}

@media (max-width: 1366px) {
  div.menu__title h1 {
    font-size: 1.5rem;
  }

  span,
  p {
    font-size: 12px;
  }
}
</style>

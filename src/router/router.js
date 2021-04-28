import VueRouter from "vue-router";

import Dashboard from "../views/Dashboard/Pages/Dashboard.vue";
import UploadDownloadData from "../views/UploadDownloadData/Pages/UploadDownloadData.vue";
import HitungInsentif from "../views/HitungInsentif/Pages/HitungInsentif.vue";
import MasterData from "../views/MasterData/Pages/MasterData.vue";
import ParameterRumus from "../views/ParameterRumus/Pages/ParameterRumus.vue";
import Parameter from "../views/Parameter/Pages/Parameter.vue";
import Koreksi from "../views/Koreksi/Pages/Koreksi.vue";
import Closing from "../views/Closing/Pages/Closing.vue";
import Report from "../views/Report/Pages/Report.vue";
import Login from "../views/Login/pages/Login.vue";

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "is-active",
  routes: [
    {
      path: "/",
      redirect: "/front-liner-incentif",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/front-liner-incentif",
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/front-liner-incentif/updowndata",
      component: UploadDownloadData,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/front-liner-incentif/hitunginsentif",
      component: HitungInsentif,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/front-liner-incentif/masterdata",
      component: MasterData,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/front-liner-incentif/parameterrumus",
      component: ParameterRumus,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/front-liner-incentif/parameter",
      component: Parameter,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/front-liner-incentif/koreksi",
      component: Koreksi,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/front-liner-incentif/closing",
      component: Closing,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/front-liner-incentif/report",
      component: Report,
      meta: {
        requiresAuth: true,
      },
    },
    { path: "/login", component: Login },
    { path: "*", redirect: "/front-liner-incentif" },
    { path: "/*", redirect: "/front-liner-incentif" },
  ],
});

export default router;

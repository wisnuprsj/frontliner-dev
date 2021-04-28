import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state() {
    return {
      nik: null,
      name: null,
    };
  },
  actions,
  getters,
  mutations,
};

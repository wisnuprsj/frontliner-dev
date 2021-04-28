<template>
  <button
    v-bind:class="[classes, { danger: danger }]"
    v-bind:type="type"
    v-on:click="handleClick($event)"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    classes: {
      type: String,
      default: "",
    },
    danger: {
      type: Boolean,
      default: false,
    },
    naming: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick(event) {
      if (this.naming) {
        return this.$emit("click", event, this.naming);
      }
      this.$emit("click", event);
    },
  },
};
</script>

<style scoped>
button {
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
}

.tab {
  padding: 15px 20px;
  width: 200px;
  font-weight: bold;
}

.active {
  background-color: #61b15a;
}

.button {
  border-radius: 10px;
  transition: all 0.1s ease-in-out;
  box-shadow: -3px -3px 6px rgba(255, 255, 255, 0.8),
    3px 3px 6px rgba(0, 0, 0, 0.2);
  color: #f3f0f1;
  background-color: #61b15a;
}

.spread {
  width: 100%;
  height: 100%;
}

.button span {
  font-size: 14px;
  font-weight: semibold;
}

.button:hover {
  opacity: 0.8;
  box-shadow: -3px -3px 6px rgba(255, 255, 255, 0.8),
    3px 3px 6px rgba(0, 0, 0, 0.2);
}

.button:active {
  opacity: 1;
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
    inset 8px 8px 16px rgba(0, 0, 0, 0.1);
  color: #f6f578;
}

.btn-1 {
  width: 400px;
  height: 100px;
}

.btn-1 span {
  font-size: 32px;
  font-weight: semibold;
}

.btn-2 {
  width: 200px;
  height: 50px;
}

.btn-2 span {
  font-size: 16px;
  font-weight: semibold;
}

.btn-3 {
  width: 160px;
  height: 30px;
}

.btn-3 span {
  font-size: 16px;
  font-weight: semibold;
}

.btn-4 {
  width: 100px;
  height: 30px;
}

.danger {
  background-color: red;
}

.btn-login {
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

.btn-login:hover {
  color: #212529;
  background-color: #ffcb74;
  border-color: #fff;
}

.btn-login:focus,
.btn-login.focus {
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
    inset 8px 8px 16px rgba(0, 0, 0, 0.1);
}
</style>

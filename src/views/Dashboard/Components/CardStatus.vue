<template>
  <div class="card">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="body">
      <slot name="body"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  min-width: 10rem;
  border-radius: 10px;
  text-align: center;
  margin: 0;
  width: 270px;
  height: 270px;
}

header {
  background-color: #61b15a;
  padding: 1rem;
  font-size: 16px;
  font-weight: bold;
}

.body {
  padding: 40px 20px 0px 20px;
}
</style>

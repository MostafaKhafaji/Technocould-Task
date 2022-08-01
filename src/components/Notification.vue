<template>
  <div class="done">
    <div class="overlay"></div>
    <div class="icon">
      <span class="material-symbols-outlined"> done </span>
    </div>
    <h2>Thank you for your order</h2>
    <div class="text">
      <button @click="backToForm">Orders</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backToForm() {
      this.$emit("swapToForm");
    },
  },
};
</script>

<style scoped>
.done {
  margin: 50px auto;
  width: 30%;
  height: 400px;

  background-color: #fff;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
}
.done .icon {
  width: 100px;
  height: 100px;
  background-color: rgb(15, 161, 15);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.done .icon span {
  font-size: 100px;
  color: white;
}

.done button {
  padding: 10px;
  background-color: rgb(235, 96, 96);
  width: 80px;
  border-radius: 10px;
  padding: 10px;
  border: none;
  color: white;
  cursor: pointer;
}

@media (max-width: 767px) {
  .done {
    width: 70%;
  }
}
</style>

<template>
  <form @submit.prevent="handleSubmitService">
    <label for=""> Choose the service </label>
    <select :class="{ active: valid }" v-model="service" @change="validFrom">
      <option value="" disabled selected>Select your option</option>
      <option value="service1">service1</option>
      <option value="service2">service2</option>
      <option value="service3">service3</option>
      <option value="service4">service4</option>
      <option value="service5">service5</option>
    </select>
    <button class="form" :disabled="!valid">NEXT</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      service: "",
      step: "lang",
    };
  },
  methods: {
    handleSubmitService() {
      this.$emit("closeService", this.step);
    },
    validFrom() {
      this.valid = true;
    },
  },
};
</script>

<style>
form {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  height: 100%;
}

form label {
  font-weight: bold;
  margin-bottom: 10px;
  display: inline-block;
}
select {
  width: 80%;
  padding: 7px;
  border-radius: 10px;
  background-color: #e9e8e8;
  color: #acacac;
  outline: none;
  border-color: rgb(177, 177, 177);
  transition: all 0.1s ease-in-out;
}
.active {
  background-color: #fff;
  border-width: 3px;
  border-color: #000;
  color: #000;
}
select option {
  margin: 40px;
  color: #000;
  background-color: #fff;
}
button.form {
  background-color: rgb(235, 96, 96);
  width: 20%;
  border-radius: 10px;
  padding: 10px;
  border: none;
  color: white;
  position: absolute;
  bottom: 0;
  left: 80%;
  cursor: pointer;
}

@media (max-width: 767px) {
  button.form {
    width: 100%;
    left: 0;
  }
}
</style>

<template>
  <aside>
    <div class="icon">
      <span class="material-symbols-outlined"> arrow_back </span>
    </div>
    <div class="status">
      <ul>
        <li>{{ updatedService }}</li>
        <li>long established fact that a</li>
        <li>reader will be distracted by</li>
        <li>the readable content of a</li>
        <li>page when looking at its</li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: ["currentStep"],
  data() {
    return {
      service: "Choose the service",
    };
  },
  computed: {
    updatedService() {
      if (this.currentStep === "lang") {
        this.service = "Choose languages";
      } else if (this.currentStep === "upload") {
        this.service = "file to be translated";
      }
      return this.service;
    },
  },
};
</script>

<style scoped>
aside {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
aside .icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 4px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
aside .icon span {
  font-size: 30px;
}
aside .status ul li:first-child {
  padding-top: 5px;
  font-weight: bold;
  font-size: 25px;
}
aside .status ul li:not(:first-child) {
  padding-top: 20px;
}
@media (max-width: 767px) {
  aside {
    display: none;
  }
}

@media (max-width: 1151px) {
  aside {
    display: none;
  }
}
</style>

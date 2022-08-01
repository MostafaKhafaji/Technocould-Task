<template>
  <div class="form">
    <ServiceForm v-if="checkToLang" @closeService="closeService" />
    <LanguageForm v-else-if="serviceDone" @closeLang="closeLang" />
    <UploadForm v-else-if="langStep" @finish="finish" />
  </div>
</template>

<script>
import ServiceForm from "./Forms/ServiceForm.vue";
import LanguageForm from "./Forms/LanguageForm.vue";
import UploadForm from "./Forms/UploadForm.vue";

export default {
  components: { ServiceForm, UploadForm, LanguageForm },
  data() {
    return {
      checkToLang: true,
      serviceDone: false,
      langStep: false,
    };
  },
  methods: {
    closeService(step) {
      this.checkToLang = false;
      this.serviceDone = true;
      this.$emit("nextStep", step);
    },
    closeLang(step) {
      this.serviceDone = false;
      this.langStep = true;
      this.$emit("nextStep", step);
    },
    finish() {
      this.$emit("finish");
    },
  },
};
</script>

<style scoped>
.form {
  height: 350px;
}
</style>

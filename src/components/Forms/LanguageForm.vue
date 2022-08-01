<template>
  <form @submit.prevent="handleSubmitLang">
    <div>
      <label> source file language </label>
      <select
        :class="{ active: sourceLang.length }"
        v-model="sourceLang"
        @change="validFrom"
      >
        <option value="" disabled selected>Select language</option>
        <option value="English">English</option>
        <option value="Arabic">Arabic</option>
        <option value="Spanish">Spanish</option>
        <option value="Frensh">Frensh</option>
      </select>
    </div>
    <div>
      <label> target language </label>
      <select
        :class="{ active: targetLang.length }"
        v-model="targetLang"
        @change="validFrom"
      >
        <option value="" disabled selected>Select language</option>
        <option value="English">English</option>
        <option value="Arabic">Arabic</option>
        <option value="Spanish">Spanish</option>
        <option value="Frensh">Frensh</option>
      </select>
    </div>

    <button class="form" :disabled="!valid">NEXT</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      sourceLang: "",
      targetLang: "",
      valid: false,
      step: "upload",
    };
  },
  methods: {
    validFrom() {
      if (this.sourceLang.length && this.targetLang.length > 0) {
        this.valid = true;
      }
    },
    handleSubmitLang() {
      this.$emit("closeLang", this.step);
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  background-color: #fff;
  padding: 20px;
  width: 75%;
  border-radius: 10px;
  margin: 20px auto;
  margin-bottom: 20px;
}
@media (max-width: 767px) {
  div {
    width: 100%;
  }
}
</style>

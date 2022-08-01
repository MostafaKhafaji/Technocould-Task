<template>
  <div id="stepProgressBar">
    <div class="step">
      <div class="bullet completed">1</div>
      <p class="step-text">Choose the service</p>
    </div>
    <div class="step">
      <div
        class="bullet"
        :class="{
          completed: currentStep == 'lang' || currentStep == 'upload',
        }"
      >
        2
      </div>
      <p class="step-text">Choose languages</p>
    </div>
    <div class="step">
      <div class="bullet" :class="{ completed: currentStep == 'upload' }">
        3
      </div>
      <p class="step-text">file to be translated</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentStep"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#stepProgressBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

.step {
  text-align: center;
}

.step-text {
  color: black;
  font-size: 12px;
}

.bullet {
  border: 1px solid #b8b8b8;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  color: #b8b8b8;
  display: inline-block;
  position: relative;
  transition: background-color 500ms;
  line-height: 20px;
  margin-bottom: 10px;
}

.bullet.completed {
  color: #fff;
  background-color: #28a745;
}

.step:not(:last-child) .bullet::after {
  content: "";
  position: absolute;
  left: 50px;
  bottom: 7px;
  height: 3px;
  width: 90px;
  background: radial-gradient(circle at center, #b8b8b8 2px, transparent 3px)
      0px 50%/30px 5px repeat-x,
    radial-gradient(circle at center, #b8b8b8 2px, transparent 3px) 10px 50%/30px
      5px repeat-x,
    repeating-linear-gradient(
        to right,
        #b8b8b8,
        #b8b8b8 10px,
        transparent 10px,
        transparent 30px
      )
      center/100% 3px no-repeat;
}
.step:not(:last-child) .bullet.completed::after {
  background: radial-gradient(circle at center, #28a745 2px, transparent 3px)
      0px 50%/30px 5px repeat-x,
    radial-gradient(circle at center, #28a745 2px, transparent 3px) 10px 50%/30px
      5px repeat-x,
    repeating-linear-gradient(
        to right,
        #28a745,
        #28a745 10px,
        transparent 10px,
        transparent 30px
      )
      center/100% 3px no-repeat;
}

@media (max-width: 767px) {
  .step:not(:last-child) .bullet::after {
    width: 0px;
  }
  .step:not(:last-child) .bullet.completed::after {
    width: 0px;
  }
}
</style>

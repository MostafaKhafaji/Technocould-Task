<template>
  <div class="overlay"></div>
  <NavBar />
  <main v-if="!finishForm">
    <div class="container">
      <SideBar :currentStep="currentStep" />
      <section>
        <div>
          <base-card>
            <Progress :currentStep="currentStep" />
          </base-card>
        </div>

        <base-card>
          <FormControl @nextStep="nextStep" @finish="finish" />
        </base-card>
      </section>
    </div>
  </main>
  <transition name="fade">
    <Notification v-if="finishForm" @swapToForm="finish" />
  </transition>
  <Footer />
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import FormControl from "./components/FromControl";
import Progress from "./components/Progress";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { NavBar, SideBar, FormControl, Progress, Notification, Footer },
  data() {
    return {
      currentStep: "",
      finishForm: false,
    };
  },
  methods: {
    nextStep(step) {
      this.currentStep = step;
    },
    finish() {
      this.finishForm = !this.finishForm;
      this.currentStep = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #ececec;
}
a {
  text-decoration: none;
  color: #000;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  padding-left: 100px;
  padding-right: 100px;
  margin-right: auto;
  margin-left: auto;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

main {
  margin-top: 30px;
}

main .container {
  display: grid;
  grid-template-columns: 30% 70%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 767px) {
  .container {
    padding-left: 30px;
    padding-right: 30px;
  }
  main .container {
    display: grid;
    grid-template-columns: 100%;
  }
}
@media (max-width: 1151px) {
  .container {
    padding-left: 30px;
    padding-right: 30px;
  }
  main .container {
    display: grid;
    grid-template-columns: 100%;
  }
}
</style>

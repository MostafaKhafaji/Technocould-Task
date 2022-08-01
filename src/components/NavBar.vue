<template>
  <nav>
    <transition name="fade">
      <div v-if="openMobMenu" class="nav-mobile">
        <div class="mobile-links">
          <span @click="openMobMenu = false" class="material-symbols-outlined">
            close
          </span>
          <ul>
            <a href="#"><li>home</li></a>
            <a href="#"><li>about us</li></a>
            <a href="#"><li>contact us</li></a>
            <a href="#"><li>blogs</li></a>
          </ul>
        </div>
      </div>
    </transition>

    <div class="container">
      <div class="logo">
        <a href="#">
          <h1>LO<br />GO</h1></a
        >
      </div>
      <div class="open-menu" @click="openMobMenu = !openMobMenu">
        <span class="material-symbols-outlined"> menu </span>
      </div>
      <div class="links">
        <ul>
          <a href="#"><li>home</li></a>
          <a href="#"><li>about us</li></a>
          <a href="#"><li>contact us</li></a>
          <a href="#"><li>blogs</li></a>
        </ul>
      </div>
      <div class="account">
        <a href="#">
          <p>AHMED</p>
          <span class="material-symbols-outlined"> account_circle </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      openMobMenu: false,
    };
  },
};
</script>

<style scoped>
nav .container {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  height: 100px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
nav .logo h1 {
  color: red;
  font-size: 30px;
}
nav .links {
  display: flex;
}
nav .links ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}
nav .links ul a {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 15px;
  transition: all 0.3s ease;
  color: rgb(124, 124, 124);
  font-weight: bold;
}
nav .links a:hover {
  color: rgb(0, 0, 0);
}
nav .account {
  display: flex;
  align-items: center;
}
nav .account a {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  transition: all 0.3 ease;
}

nav .account span {
  font-size: 30px;
}
.nav-mobile {
  bottom: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-mobile ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav-mobile span {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: red;
  font-size: 40px;
}
.nav-mobile ul li {
  margin: 20px 0;
  font-weight: bold;
  text-transform: uppercase;
}

.open-menu {
  display: none;
}

@media (max-width: 767px) {
  nav .links {
    display: none;
  }
  .open-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

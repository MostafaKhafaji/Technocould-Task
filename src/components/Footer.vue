<template>
  <footer>
    <div class="container">
      <div class="icons">
        <a href="#">
          <span
            ><font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'facebook' }"
            />
          </span>
        </a>
        <a href="#">
          <span> <font-awesome-icon icon="fa-brands fa-twitter" /></span>
        </a>
        <a href="#">
          <span>
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"
          /></span>
        </a>
      </div>
      <div class="links">
        <ul>
          <a href="#"><li>home</li></a>
          <a href="#"><li>about us</li></a>
          <a href="#"><li>contact us</li></a>
          <a href="#"><li>blogs</li></a>
        </ul>
      </div>

      <div class="logo">
        <a href="#">
          <h1>LO<br />GO</h1></a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: black;
}
footer .container {
  display: grid;
  grid-template-columns: 20% 70% 10%;
  height: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
}
footer .logo h1 {
  color: red;
  font-size: 30px;
}
footer .links {
  display: flex;
}
footer .links ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}
footer .links ul a {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 15px;
  transition: all 0.3s ease;
  color: white;
}
footer .links a:hover {
  color: rgb(255, 83, 83);
}
footer .icons {
  display: flex;
  align-items: center;
}
footer .icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icons a span {
  color: #fff;
  font-size: 20px;
  transition: all 0.3s ease;
}

.icons a span:hover {
  color: rgb(158, 158, 158);
}

@media (max-width: 767px) {
  footer .container {
    display: flex;
    justify-content: space-between;
  }
  footer .links {
    display: none;
  }
}
</style>

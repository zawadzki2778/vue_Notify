<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE NOTIFY</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link
                  class="navbar-link"
                  :title="link.title"
                  :to="link.url"
                  >{{ link.title }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

    <!-- <footer></footer> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        { title: "Home", url: "/" },
        { title: "Notify", url: "/NotifyPage" },
      ],
    };
  },
};
</script>

<style lang="scss">
// делаем активную ссылку синей
// в начале обращаемя к общему классу .navbar-link
// после с помощью инспектора ищем активный класс и задаём ему цвет
.navbar-link {
  &.router-link-exact-active {
    color: blue;
  }
}
</style>

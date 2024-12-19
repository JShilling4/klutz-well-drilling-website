<template>
  <div class="app">
    <MainHeader />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// const router = useRouter();

// const currentRoute = router.currentRoute;
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}

html {
  background-color: #fff;
}

body {
  font-family: Verdana, sans-serif;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  color: #fff;
  text-decoration: none;
}

.app {
  background-color: #fff;
}

.page-wrapper {
  margin: 0 auto;
  color: #fff;
  padding: 1rem 2rem 0;

  @media screen and (max-width: 1024px) {
    padding-top: 2rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
  @media screen and (max-width: 556px) {
    padding: 2rem 2rem 0;
  }
  @media screen and (max-width: 430px) {
    padding: 2rem 1.5rem 0;
  }
  @media screen and (max-width: 375px) {
    padding: 2rem 0.5rem 0;
  }
}

.body-wrapper {
  min-height: 100vh;
}

* {
  scrollbar-width: thin;
  // scrollbar-color: var(--color-primary) var(--banner-color);
}

body::-webkit-scrollbar {
  width: 5px;
}

// body::-webkit-scrollbar-track {
//   background: var(--banner-color);
// }

body::-webkit-scrollbar-thumb {
  // background-color: var(--color-primary);
  // outline: 1px solid var(--color-secondary);
  border-radius: 10px;
}

.view-container {
  padding: 2rem 0;

  @media screen and (max-width: 460px) {
    padding-top: 1rem;
  }

  // &.--with-bg {
  //   background-image: url("https://res.cloudinary.com/damqu5egp/image/upload/v1717951765/steele_rail_band/backgrounds/page-bg_mjzrxz.jpg");
  //   background-attachment: fixed;
  //   background-position: center;
  //   background-size: cover;
  //   @media screen and (max-width: 1024px) {
  //     background: none;
  //   }
  //   @media screen and (max-width: 768px) {
  //     background-color: var(--bg-black);
  //   }
  // }
}
</style>

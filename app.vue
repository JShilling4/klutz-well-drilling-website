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
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "width" 100;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  color: #fff;
  text-decoration: none;
}

img {
  max-width: 100%;
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
</style>

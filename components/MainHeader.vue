<template>
  <header class="header">
    <RouterLink class="brand" to="/"> Klutz Well Drilling Inc. </RouterLink>
    <div class="header-top"></div>
    <nav class="nav">
      <ul v-if="showMenu" class="navlink-container">
        <li class="navlink">
          <RouterLink to="/" class="navlink-text">Home</RouterLink>
        </li>
        <li class="navlink">
          <RouterLink to="/services" class="navlink-text">Services</RouterLink>
        </li>
        <li class="navlink">
          <RouterLink to="/about" class="navlink-text">About Us</RouterLink>
        </li>
        <li class="navlink">
          <RouterLink to="/gallery" class="navlink-text">Gallery</RouterLink>
        </li>
        <li class="navlink">
          <RouterLink to="/contact" class="navlink-text">Contact</RouterLink>
        </li>
        <li class="navlink fb">
          <a href="" noreferrer target="_blank" class="social-icon">
            <FontAwesomeIcon
              :icon="['fab', 'facebook']"
              color="var(--primary-bg-color)"
              aria-hidden="true"
            />
            <span class="sr-only">Facebook</span>
          </a>
        </li>
      </ul>
      <!-- <FontAwesomeIcon
          :icon="['fas', 'bars']"
          class="menu-toggle"
          @click="toggleMenu"
        /> -->
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const showMenu = ref(true);
const windowWidth = ref(window.innerWidth);

const route = useRoute();

watch(
  () => route.path,
  () => {
    if (windowWidth.value <= 1024) showMenu.value = false;
  },
  { immediate: true },
);

onMounted((): void => {
  window.addEventListener("resize", onResize);
  if (windowWidth.value <= 1024) showMenu.value = false;
});

onUnmounted((): void => {
  window.removeEventListener("resize", onResize);
});

function onResize(): void {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value >= 1025) {
    showMenu.value = true;
  } else {
    showMenu.value = false;
  }
}

function toggleMenu(): void {
  showMenu.value = !showMenu.value;
}
</script>

<style lang="scss" scoped>
.header {
  padding: 1rem 0 2rem;
  background-color: #fff;
  font-weight: 600;
  text-align: center;
}

.brand {
  display: block;
  padding: 1rem 0 2rem;
  font-size: 30px;
  color: var(--primary-bg-color);
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 100;
  margin: 0 auto;
  background-color: #fff;
}

.navlink-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .navlink {
    font-family: "Yesteryear", sans-serif;
    position: relative;
    height: 100%;
    letter-spacing: 2px;
    font-weight: 400;
    text-align: right;
    cursor: pointer;

    .navlink-text {
      display: inline-block;
      padding: 10px 3.5rem;
      opacity: 1;
      font-size: 16px;
      font-weight: 600;
      color: #333;
      text-transform: uppercase;
      transition: all 0.3s;

      &:hover {
        color: var(--primary-bg-color);
      }
    }

    .social-icon {
      padding: 10px 1rem;
      font-size: 30px;
    }
  }
}

.router-link-active {
  color: var(--primary-bg-color) !important;
}
</style>

<script setup lang="ts">
const { heading = "" } = defineProps<{
  heading?: string;
}>();
</script>

<template>
  <section class="subpage-hero">
    <div class="overlay"></div>
    <AppContainer>
      <div class="content-block">
        <h1 class="hero-heading">{{ heading }}</h1>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.subpage-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: black;
  background-image: url("/assets/images/subpage-hero-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 10px solid #8f8f8f;
  z-index: 1;

  .overlay {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.4)
    );
    z-index: 0;
  }
  .content-block {
    position: relative;
    padding: 0 3rem;
    text-align: center;
  }

  .hero-heading {
    font-size: 46px;
    font-weight: 600;
    letter-spacing: -1px;
    color: #fff;
    line-height: 1.5;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  }
  .btn-container {
    margin: 2.5rem auto 0;
    text-align: center;

    .btn {
      margin: 0 2rem;
    }
  }
}
</style>

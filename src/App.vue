<script setup>
import NavBar from './Shared/NavBar.vue';
</script>

<template>
  <main class="md:px-16">
    <nav-bar></nav-bar>
    <div class="mx-16">
      <router-view></router-view>
    </div>
  </main>
</template>

<style>
html {
  background-image: linear-gradient(to right, #8ec5fc, #e0c3fc);
}
</style>

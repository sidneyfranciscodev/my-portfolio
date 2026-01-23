<script setup>
import TheFooter from '@/components/TheFooter.vue';
import TheNavbar from '@/components/TheNavbar.vue';

</script>

<template>
  <the-navbar></the-navbar>
  <div id="view">
    <router-view />
  </div>
  <the-footer></the-footer>
</template>

<style scoped></style>

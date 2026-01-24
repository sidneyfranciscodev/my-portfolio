<template>
  <div class="badge">
    <div class="content">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<script setup>
import { onMounted, ref } from 'vue';
import { makePdf } from './templates/makePdf';

const pdfSrc = ref('');

onMounted(async () => {
  const pdfBuffer = await makePdf();
  const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
  pdfSrc.value = URL.createObjectURL(blob); // Blob URLを生成
});
</script>

<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;">
    <iframe
      v-if="pdfSrc"
      :src="pdfSrc"
      width="80%"
      height="80%"
      style="border: none; max-width: 800px; max-height: 1000px;"
    ></iframe>
  </div>
</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

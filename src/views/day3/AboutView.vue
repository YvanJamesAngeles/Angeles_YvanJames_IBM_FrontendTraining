<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() {
  router.push('/home')
}
</script>

<template>
  <div style="padding: 20px">
    <h1>About</h1>
    <p>This is the About page for the Day 3 Vue Router assignment.</p>
    <button class="back-btn" @click="goBack">← Back</button>
  </div>
</template>

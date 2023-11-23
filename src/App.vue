<script setup lang="ts">
import Header from './components/Header.vue'
import { useAuth } from './composables/useAuth'

const { isAuth, publicKey } = useAuth();
</script>

<template>
  <Header />
  <div>
    <p>Welcome, </p>
    <p>
      You are {{
        isAuth
        ? `logged in with pubKey: ${publicKey}`
        : `not logged`
      }}
    </p>
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

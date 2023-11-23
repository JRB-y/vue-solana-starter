<script setup lang="ts">
import { WalletMultiButton } from "solana-wallets-vue"
</script>

<template>
  <header>
    <div class="logo">
      <a href="http://0xjrb.sol" target="_blank" title="0xjrb website on ipfs">0xjrb</a>
    </div>
    <div class="login">
      <WalletMultiButton dark />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  background-color: #181818;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
}

.logo {
  font-size: 2.5rem;
}
</style>
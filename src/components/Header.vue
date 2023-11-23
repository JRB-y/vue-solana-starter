<script setup lang="ts">
import { WalletMultiButton } from "solana-wallets-vue"
import { useAuth } from '../composables/useAuth';

const { balance, isAuth } = useAuth();

</script>

<template>
  <header>
    <div class="main">
      <div class="logo">
        <a href="http://0xjrb.sol" target="_blank">
          0xjrb
        </a>
      </div>
      <div class="login">
        <WalletMultiButton dark />
      </div>
    </div>
    <div class="sub" v-if="isAuth">
      <div>{{ balance }} <span>◎</span></div>
    </div>
  </header>
</template>

<style scoped>
header>div {
  display: flex;
  background-color: #181818;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
}

header>.sub {
  background-color: slategray;
  color: #181818;
  font-size: 1.3rem;
  display: flex;
  justify-content: end;
}

.sub>div>span {
  font-size: 1.5rem;
  font-weight: bold;
}

.logo {
  font-size: 2.5rem;
}
</style>
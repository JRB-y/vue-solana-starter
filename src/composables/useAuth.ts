import { ref, watch } from 'vue'
import { useWallet } from 'solana-wallets-vue'

export function useAuth() {
  const { connected, publicKey } = useWallet();
  const isAuth = ref(null);

  watch(connected, () => {
    isAuth.value = publicKey.value ? publicKey : null;
  })

  return {
    isAuth
  }
}
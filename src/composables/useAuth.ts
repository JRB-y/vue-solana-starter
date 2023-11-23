import { Ref, ref, watch } from 'vue'
import { useWallet } from 'solana-wallets-vue'
import { Connection, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js'

const connection: Connection = new Connection(clusterApiUrl('devnet'))

export function useAuth() {
  const isAuth: Ref = ref(false)
  const balance: Ref = ref(0.0)

  const { connected, publicKey } = useWallet()

  watch(connected, async () => {
    // set the isAuth if logged or no
    isAuth.value = publicKey.value ? true : false

    // get balance
    balance.value = isAuth.value
      ? (await connection.getBalance(publicKey.value)) / LAMPORTS_PER_SOL
      : null;
  })


  return {
    isAuth,
    balance,
    publicKey
  }
}
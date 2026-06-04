import { useWatchlistStore } from '~/stores/watchlist'
import { useProgressStore } from '~/stores/progress'

export default defineNuxtPlugin(async () => {
  const watchlist = useWatchlistStore()
  const progress = useProgressStore()

  // Run in parallel — watchlist fetches API for logged-in users
  await Promise.all([watchlist.init(), progress.init()])

  window.addEventListener('message', progress.handleMessage)
})

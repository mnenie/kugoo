export default function linkToTelegramHelper() {
  const goToTg = () => {
    const url: string = 'https://t.me/kugoo_russia_bot'
    window.open(url, '_blank')
  }
  return {
    goToTg
  }
}

export default function linkToInstagramHelper() {
  const goToInst = () => {
    const url: string = 'https://www.instagram.com/kugoo_russia_com/'
    window.open(url, '_blank')
  }
  return {
    goToInst
  }
}

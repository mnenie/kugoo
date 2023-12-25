export default function goToBankLink() {
  const goToBank = () => {
    const url: string = 'https://www.sberbank.ru/ru/person'
    window.open(url, '_blank')
  }
  return {
    goToBank
  }
}

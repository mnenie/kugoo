import { ref } from 'vue'

export default function changeDateHelper() {
  const endDate = ref(new Date().getTime() + 6 * 24 * 60 * 60 * 1000 + 48 * 60 * 60 * 1000)
  const remainingTime = ref('')

  const updateTime = () => {
    const now = new Date().getTime()
    const difference = endDate.value - now

    if (difference <= 0) {
      clearInterval(timer)
      remainingTime.value = 'Акция завершена'
    } else {
      const days = Math.floor(difference / (24 * 60 * 60 * 1000))
      const hours = Math.floor((difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
      const minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000))
      const seconds = Math.floor((difference % (60 * 1000)) / 1000);
      remainingTime.value = `${days}:${hours}:${minutes}:${seconds}`
    }
  }
  const timer = setInterval(updateTime, 1000);

  return {
    timer,
    remainingTime,
    updateTime
  }
}

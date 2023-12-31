export default function linkToYoutubeHelper() {
  const goToYouTube = () => {
    const url: string = 'https://www.youtube.com/@kugoorussia'
    window.open(url, '_blank')
  }
  return {
    goToYouTube
  }
}

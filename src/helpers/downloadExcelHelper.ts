export default function downloadExcelHelper() {
  const downlandExcel = async () => {
    const filePath = '/data/pricelist.xlsx'
    const response = await fetch(filePath)
    const blob = await response.blob()
    const downloadLink = document.createElement('a')
    downloadLink.href = window.URL.createObjectURL(blob)
    downloadLink.download = 'pricelist.xlsx'

    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }
  return {
    downlandExcel
  }
}

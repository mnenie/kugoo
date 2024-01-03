import { ref } from "vue"

export default function dropdownProductHelper(){
  const isItems = ref<boolean>(false)
  const changeCard = () => {
    isItems.value = true
  }
  return{
    changeCard, isItems
  }
}
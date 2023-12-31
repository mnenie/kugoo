import type { IRepair } from '@/types/repair.interface'
import axios from 'axios'
import { type Ref } from 'vue'

export default function useRepair() {
  const getRepairScooters = async (items: Ref<IRepair[]>) => {
    try {
      const response = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/repaircost/repairScooters.json')
      items.value = response.data
    } catch (err) {
      console.log(err)
    }
  }

  const getRepairBikes = async(items: Ref<IRepair[]>) => {
    try {
      const response = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/repaircost/repairBikes.json')
      items.value = response.data
    } catch (err) {
      console.log(err)
    }
  }

  const getRepairGiro = async(items: Ref<IRepair[]>) => {
    try {
      const response = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/repaircost/repairGiro.json')
      items.value = response.data
    } catch (err) {
      console.log(err)
    }
  }

  const getRepairMoped= async(items: Ref<IRepair[]>) => {
    try {
      const response = await axios.get('https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/repaircost/repairMoped.json')
      items.value = response.data
    } catch (err) {
      console.log(err)
    }
  }
  return {
    getRepairScooters, getRepairBikes, getRepairGiro, getRepairMoped
  }
}

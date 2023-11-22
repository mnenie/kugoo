import type { IRepair } from '@/types/repair.interface'
import axios from 'axios'
import { type Ref } from 'vue'

export default function useRepair() {
  const getRepairScooters = async (items: Ref<IRepair[]>) => {
    try {
      const response = await axios.get('/data/repaircost.json')
      items.value = response.data.repairScooters
    } catch (err) {
      console.log(err)
    }
  }

  const getRepairBikes = async(items: Ref<IRepair[]>) => {
    try {
      const response = await axios.get('/data/repaircost.json')
      items.value = response.data.repairBikes
    } catch (err) {
      console.log(err)
    }
  }

  const getRepairGiro = async(items: Ref<IRepair[]>) => {
    try {
      const response = await axios.get('/data/repaircost.json')
      items.value = response.data.repairGiro
    } catch (err) {
      console.log(err)
    }
  }

  const getRepairMoped= async(items: Ref<IRepair[]>) => {
    try {
      const response = await axios.get('/data/repaircost.json')
      items.value = response.data.repairMoped
    } catch (err) {
      console.log(err)
    }
  }
  return {
    getRepairScooters, getRepairBikes, getRepairGiro, getRepairMoped
  }
}

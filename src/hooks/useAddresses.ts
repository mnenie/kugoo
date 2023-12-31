import axios from "axios";
import { onMounted, ref } from "vue";

export default function useAddresses() {
  const address = ref<string[]>([]);

  const getAddress = async () => {
    try {
      const response = await axios.get(`https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia`);
      address.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(() => {
    getAddress();
  });

  return {
    address
  };
}
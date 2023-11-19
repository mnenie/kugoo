<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Navigation from '@/components/layout/Navigation.vue';
import { onMounted, ref } from 'vue';
import Loader from '@/components/UI/Loader.vue';
import ModalTime from './components/UI/ModalTime.vue';
import { useModal, ModalsContainer } from 'vue-final-modal';
const isLoading = ref<boolean>(true);
const { open, close } = useModal({
  component: ModalTime,
  attrs: {
    onClose() {
      close()
    },
    onConfirm() {
      close();
    }
  }
})
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 700);
  setTimeout(() => {
    open();
  }, 10000)
});

</script>

<template>
  <div class="page-container">
    <Header />
    <Loader v-if="isLoading" />
    <main v-else>
      <router-view />
    </main>
    <Footer />
    <Navigation />
    <ModalsContainer />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
}
</style>
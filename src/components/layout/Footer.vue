<script setup lang="ts">
import FooterForm from './footer/FooterForm.vue'
import FooterCatalog from './footer/FooterCatalog.vue'
import FooterNetworks from './footer/FooterNetworks.vue'
import FooterBottom from './footer/FooterBottom.vue'
import FooterMobile from './footer/FooterMobile.vue'
import { footerCatalog } from '@/mocks/footer/footerCatalog';
import { footerBuyers } from '@/mocks/footer/footerBuyers';
import { footerContacts } from '@/mocks/footer/footerContacts';
import { footerNetwork } from '@/mocks/footer/footerNetwork';
import { footerAddress } from '@/mocks/footer/footerAddress';
</script>

<template>
  <footer>
    <FooterForm />
    <div class="bg_display">
      <div class="container">
        <FooterCatalog class="nomobile" :contacts-new="footerAddress" :contacts="footerContacts" :buyers="footerBuyers"
          :catalog="footerCatalog" />
        <FooterNetworks class="nomobile" :network="footerNetwork" />
        <FooterBottom class="nomobile" />
        <FooterMobile class="mobile" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.bg_display {
  background: var(--btn-gray-color);

  .nomobile {
    display: flex;
  }

  .mobile {
    display: none;
  }
}

@media screen and (max-width: 540px) {
  .bg_display {
    .nomobile {
      display: none;
    }

    .mobile {
      display: flex;
    }
  }
}</style>
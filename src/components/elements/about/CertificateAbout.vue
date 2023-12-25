<script setup lang="ts">
import TextCertificateAbout from './TextCertificateAbout.vue';

</script>

<template>
  <div class="certificate">
    <div class="container">
      <div class="block">
        <TextCertificateAbout />
        <img class="img" src="/img/cooperation/certificate.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.certificate {
  margin-bottom: 100px;

  .block {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;

    .img {
      width: 452px;
      height: 322px;
      border-radius: 5px;
      border: 10px solid var(--Gray-600, #5D6C7B);
    }
  }
}

@media screen and (max-width: 992px) {
  .certificate {
    .block {
      .img {
        width: 374px;
        height: 243px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .certificate {
    .block {
      .img {
        width: 280px;
        height: 200px;
      }
    }
  }
}

@media screen and (max-width: 670px) {
  .certificate {
    .block {
      flex-direction: column;
      align-items: center;
      gap: 30px;

      .img {
        width: 452px;
        height: 310px;
      }
    }
  }
}</style>
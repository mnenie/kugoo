<script setup lang="ts">
import BannerBlocks from './BannerBlocks.vue';

</script>

<template>
  <div class="banner">
    <div class="container_lg">
      <div class="banner_block">
        <div class="container">
          <div class="text">
            <h1 class="size_1">Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</h1>
            <BannerBlocks />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-bottom: 85px;

  .banner_block {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    background: linear-gradient(73deg, #6F73EE 17.37%, rgba(111, 115, 238, 0.00) 67.02%);
    min-height: 445px;
    display: flex;
    align-items: center;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('/img/about/1.png') no-repeat right bottom;
      z-index: -1;
    }

    .text {
      display: flex;
      flex-direction: column;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--white-color);
        max-width: 474px;
        margin-bottom: 34px;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .banner {
    .banner_block {
      &::after {
        right: -130px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .banner {
    margin-bottom: 80px;
    .banner_block {
      min-height: 380px;

      &::after {
        bottom: 0px;
        right: -200px;
        background-size: cover;
      }

      .text {
        & h1 {
          max-width: 368px;
        }
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .banner {
    .banner_block {
      .text {
        & h1 {
          max-width: 320px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .banner {
    .banner_block {
      min-height: 320px;

      &::after {
        bottom: 0px;
        right: -170px;
        background-size: cover;
      }

      .text {
        & h1 {
          max-width: 320px;
        }
      }
    }
  }
}
@media screen and (max-width: 650px) {
  .banner {
    .banner_block {
      min-height: 300px;

      &::after {
        bottom: 0;
        right: -180px;
      }
    }
  }
}
@media screen and (max-width: 430px) {
  .banner {
    .banner_block {
      min-height: 290px;
      &::after {
        bottom: 0;
        right: -160px;
      }
      .text{
        & h1{
          max-width: 300px;
        }
      }
    }
  }
}

</style>
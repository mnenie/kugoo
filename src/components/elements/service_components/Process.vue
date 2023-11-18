<script setup lang="ts">
const imgs = [
  {
    id: 1,
    img: '/img/service/process/1.png'
  },
  {
    id: 2,
    img: '/img/service/process/2.png'
  },
  {
    id: 3,
    img: '/img/service/process/3.png'
  },
  {
    id: 4,
    img: '/img/service/process/4.png'
  },
  {
    id: 5,
    img: '/img/service/process/5.png'
  },
  {
    id: 6,
    img: '/img/service/process/6.png'
  },
]
</script>

<template>
  <div class="process">
    <div class="blocks">
      <div class="container">
        <div class="text">
          <h1 class="size_1">Посмотрите на процесс работы</h1>
          <div class="block_process">
            <img src="/icons/service/process.png" alt="">
            <div class="block_process_text">
              <span class="size_8">В среднем</span>
              <p class="size_4">350 доработок</p>
              <span class="size_8">специалисты выполняют за 1 месяц</span>
            </div>
          </div>
        </div>
      </div>
      <div class="container_lg">
        <div class="img_content">
          <div v-for="img in imgs" :key="img.id" class="img_block">
            <img :src="img.img" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.process {
  margin-bottom: 100px;

  .blocks {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .text {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--black-color);
        max-width: 465px;
      }

      .block_process {
        border-radius: 5px;
        background: var(--purple-color);
        padding: 14px 14px 17px 25px;
        display: flex;
        align-items: center;
        gap: 20px;

        & img {
          width: 46px;
          height: 46px;
        }

        &_text {
          display: flex;
          flex-direction: column;

          & p {
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            color: var(--white-color);
          }

          & span {
            &:first-child {
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              opacity: 0.5;
              color: var(--white-color);
            }

            &:last-child {
              font-style: normal;
              font-weight: 400;
              line-height: 123%;
              color: var(--white-color);
            }
          }
        }
      }
    }

    .img_content {
      display: grid;
      grid-template-columns: 2fr 1.45fr 2fr;
      gap: 20px;

      .img_block {
        position: relative;
        overflow: hidden;
        border-radius: 10px;

        &:first-child {
          max-width: 485px;
          width: 100%;
          height: 485px;

          & img {
            position: absolute;
            top: 0;
            left: -50px;
            width: 648px;
            height: 485px;
          }
        }

        &:nth-child(2) {
          max-width: 350px;
          width: 100%;
          height: 485px;

          & img {
            position: absolute;
            top: 0px;
            left: -90px;
            width: 728px;
            height: 485px;
          }
        }

        &:nth-child(3) {
          max-width: 485px;
          width: 100%;
          height: 485px;

          & img {
            position: absolute;
            top: 0;
            left: -450px;
            width: 1502px;
            height: 485px;
          }
        }

        &:nth-child(4) {
          max-width: 485px;
          width: 100%;
          height: 350px;

          & img {
            position: absolute;
            top: 2px;
            right: 2px;
            width: 505px;
            height: 359px;
          }
        }

        &:nth-child(5) {
          max-width: 350px;
          width: 100%;
          height: 350px;

          & img {
            position: absolute;
            top: 0;
            left: -150px;
            width: 525px;
            height: 350px;
          }
        }

        &:last-child {
          width: 100%;
          max-width: 485px;
          height: 350px;

          & img {
            position: absolute;
            top: 0;
            left: -20px;
            width: 544px;
            height: 360px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .process {
    margin-bottom: 80px;
  }
}


@media screen and (max-width: 992px) {
  .process {
    .blocks {
      .img_content {
        grid-template-columns: repeat(2, 1fr);

        .img_block {
          max-width: 100% !important;
          height: 300px !important;

          &:first-child {
            & img {
              width: 548px;
              height: 385px;
            }
          }

          &:nth-child(2) {
            & img {
              width: 628px;
              height: 385px;
            }
          }

          &:nth-child(3) {
            & img {
              left: -249px;
              width: 1002px;
              height: 385px;
            }
          }

          &:nth-child(5) {
            & img {
              left: -49px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .process {
    .blocks {
      .text{
        & h1{
          max-width: 330px;
        }
      }
      .img_content {
        gap: 15px;
        .img_block {
          max-width: 100% !important;
          height: 300px !important;

          &:first-child {
            & img {
              width: 468px;
              height: 310px;
              left: -80px;
            }
          }

          &:nth-child(2) {
            & img {
              width: 570px;
              height: 310px;
            }
          }

          &:nth-child(3) {
            & img {
              left: -249px;
              width: 900px;
              height: 310px;
            }
          }
          &:nth-child(4) {
            & img {
              left: -90px;
              right: 0;
              width: 460px;
              height: 310px;
            }
          }

          &:nth-child(5) {
            & img {
              left: -120px;
              width: 470px;
              height: 310px;
            }
          }
          &:last-child{
            & img{
              left: -50px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 650px){
  .process{
    .blocks{
      .text{
        & h1{
          max-width: 298px;
        }
      }
    }
  }
}
@media screen and (max-width: 600px){
  .process{
    .blocks{
      .text{
        & h1{
          max-width: 246px;
        }
      }
    }
  }
}
</style>
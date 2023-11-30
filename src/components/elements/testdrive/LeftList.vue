<script setup lang="ts">
const items = [
  { id: 1, svg: '/icons/testdrive/check.svg', title: 'Как подготовить самокат к поездке;' },
  { id: 2, svg: '/icons/testdrive/check.svg', title: 'Как «завести» самокат;' },
  { id: 3, svg: '/icons/testdrive/check.svg', title: 'Как вести себя во время поездки и обезопасить себя и окружающих;' },
  { id: 4, svg: '/icons/testdrive/check.svg', title: 'Как складывать и раскладывать электросамокат;' },
  { id: 5, svg: '/icons/testdrive/check.svg', title: 'Как ухаживать за своим девайсом.' },
]
</script>

<template>
  <div class="left_list">
    <div class="container_lg">
      <div class="container_right">
        <div class="blocks">
          <div class="img">
            <img src="/img/testdrive/2.jpeg" alt="">
          </div>
          <div class="text">
            <h1 class="size_1">Научим правильной и безопасной езде в городе вас или вашего ребенка</h1>
            <p class="size_4">На обучении специалист расскажет:</p>
            <div class="list">
              <div v-for="item in items" :key="item.id" class="item">
                <img :src="item.svg" alt="">
                <span class="size_5">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left_list {
  margin-bottom: 100px;

  .blocks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    .img {
      width: 515px;
      min-width: 450px;
      height: 463px;
      position: relative;
      overflow: hidden;
      border-radius: 10px;

      & img {
        position: absolute;
        width: 900px;
        height: 463px;
        top: 0;
        left: -30%;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      max-width: 590px;

      & h1 {
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        color: var(--black-color);
        margin-bottom: 30px;
      }

      & p {
        margin-bottom: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 119%;
        color: var(--black-color);
      }

      .list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .item {
          display: flex;
          gap: 10px;
          align-items: center;

          & img {
            width: 22px;
            height: 22px;
          }

          & span {
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: var(--black-color);

            .inside {
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .left_list {
    .blocks {
      flex-direction: column-reverse;

      .img {
        width: 100%;

        & img {
          left: 0;
        }
      }

      .text {
        align-items: center;
        max-width: unset;

        & h1 {
          text-align: center;
        }

        .list {
          flex-direction: row;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .left_list {
    .blocks {
      .img {
        height: 400px;
        & img {
          // left: -60px;
          width: 700px;
          height: 400px;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .left_list {
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 540px) {
  .left_list {
    .blocks {
      .img {
        & img {
          width: 788px;
        }
      }
    }
  }
}
</style>
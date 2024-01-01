<script setup lang="ts">
import { onMounted } from 'vue';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const embedYouTubeVideo = (videoId: string, elementId: string) => {
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);
  }

  window.onYouTubeIframeAPIReady = function () {
    new window.YT.Player(elementId, {
      height: '200',
      width: '100%',
      videoId: videoId,
      playerVars: {
        'autoplay': 0,
        'controls': 1,
        'rel': 0,
      },
    });
  };
};

onMounted(() => {
  embedYouTubeVideo('b2DkjWpOX38', 'video1');
  embedYouTubeVideo('hhkyfuVnXw0', 'video2');
  embedYouTubeVideo('ABIKXFLAeSE', 'video3');
});
</script>

<template>
  <div class="blocks">
    <div class="block_with_text">
      <div class="block_video">
        <div
          style="position: relative; overflow: hidden; max-width: 100%; height: 200px; padding-bottom: 56.25%; border-radius: 10px;">
          <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            src="https://www.youtube.com/embed/b2DkjWpOX38?si=QS-EXhyJ4vljzejD" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen loading="lazy"></iframe>
        </div>
      </div>
      <p class="size_7">Электросамокат KUGOO KIRIN G2 MAX - ТОПовая модель ПРЕМИУМ качества с внушительными характеристики
        и технологичностью. Показатели достигаются благодаря компактности и мобильности устройства. Благодаря мотор-колесу
        на 800 W и контроллеру управления, электросамокат показывает невероятную динамику. Модель предназначена не только
        для городского типа дорог и ровных асфальтированных участков, а и для легкого бездорожья и проселочных дорог.
      </p>
    </div>
    <div class="block_with_text">
      <div class="block_video">
        <div
          style="position: relative; overflow: hidden; max-width: 100%; height: 200px; padding-bottom: 56.25%; border-radius: 10px;">
          <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            src="https://www.youtube.com/embed/hhkyfuVnXw0?si=iC4Iq3aj7l763qs5" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen loading="lazy"></iframe>
        </div>
      </div>
      <p class="size_7">Электросамокат KUGOO G1 - популярная и ТОПовая модель с внушительными характеристики и
        технологичностью.
        Показатели достигаются благодаря компактности и мобильности устройства. Благодаря двум мотор-колесам по 1000 W
        (в сумме мощность 2000 W) и контроллерам управления, электросамокат показывает невероятную динамику. Модель
        предназначена не только для городского типа дорог и ровных асфальтированных участков, а и для бездорожья.</p>
    </div>
    <div class="block_with_text">
      <div class="block_video">
        <div
          style="position: relative; overflow: hidden; max-width: 100%; height: 200px; padding-bottom: 56.25%; border-radius: 10px;">
          <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"
            src="https://www.youtube.com/embed/ABIKXFLAeSE?si=5No-j2tjFO4yv6_E" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen loading="lazy"></iframe>
        </div>
      </div>
      <p class="size_7">
        Электросамокат KUGOO MAX SPEED обновленная версия 2022 года - популярная модель в с оптимальными характеристики
        и технологичностью. Показатели достигаются благодаря компактности и мобильности устройства. Благодаря мотору 500
        W и контроллеру управления, электросамокат показывает невероятную динамику. Модель предназначена не только для
        городского типа дорог и ровных асфальтированных участков, а и для бездорожья.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;

  & .block_with_text {
    border-radius: 10px;
    max-width: 360px;

    & p {
      margin-top: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: var(--black-color);
    }

    & .block_video {
      width: 100%;
      max-width: 360px;
      display: block;
      margin: 0 auto;
      height: 200px;

      & iframe {
        object-fit: cover;
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .blocks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .block_with_text {
      width: 100%;
      min-height: 300px;
    }
  }
}</style>
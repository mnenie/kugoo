import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useLimitation = defineStore('limitation', () => {
  const showLimitation = ref<boolean>(false);
  const increaseFontSize = ref<boolean>(false);
  const originalFontSizes: Record<string, string> = {};
  const style = computed(() => {
    return showLimitation.value ? 'padding-top: 120px' : 'padding-top: 0';
  });

  const changeShowLimitation = () => {
    showLimitation.value = true
  };

  const changeShowLimitationReset = () =>{
    resetFontSize();
    showLimitation.value = false;
  }

  const toggleIncreaseFontSizeBig = () => {
    increaseFontSize.value = true;
    applyFontSizeStylesBig();
  };
  const toggleIncreaseFontSizeLgBig = () => {
    increaseFontSize.value = true;
    applyFontSizeStylesLgBig();
  };
  const toggleIncreaseFontSizeLgMoreBig = () => {
    increaseFontSize.value = true;
    applyFontSizeStylesLgMoreBig();
  };

  const applyFontSizeStylesBig = () => {
    const fontSizeMultiplier = increaseFontSize.value ? 1.06 : 1;
    const elementsToChangeFontSize = document.querySelectorAll('h1, h2, h3, p, button, input, select');
    elementsToChangeFontSize.forEach((element) => {
      const tagName = element.tagName.toLowerCase();
      if (!originalFontSizes[tagName]) {
        originalFontSizes[tagName] = getComputedStyle(element).fontSize;
      }
      (element as HTMLElement).style.fontSize = `${parseFloat(originalFontSizes[tagName]) * fontSizeMultiplier}px`;
    });
  };
  const applyFontSizeStylesLgBig = () => {
    const fontSizeMultiplier = increaseFontSize.value ? 1.2 : 1;
    const elementsToChangeFontSize = document.querySelectorAll('h1, h2, h3, p, button, input, select');
    elementsToChangeFontSize.forEach((element) => {
      const tagName = element.tagName.toLowerCase();
      if (!originalFontSizes[tagName]) {
        originalFontSizes[tagName] = getComputedStyle(element).fontSize;
      }
      (element as HTMLElement).style.fontSize = `${parseFloat(originalFontSizes[tagName]) * fontSizeMultiplier}px`;
    });
  };
  const applyFontSizeStylesLgMoreBig = () => {
    const fontSizeMultiplier = increaseFontSize.value ? 1.5 : 1;
    const elementsToChangeFontSize = document.querySelectorAll('h1, h2, h3, p, button, input, select');
    elementsToChangeFontSize.forEach((element) => {
      const tagName = element.tagName.toLowerCase();
      if (!originalFontSizes[tagName]) {
        originalFontSizes[tagName] = getComputedStyle(element).fontSize;
      }
      (element as HTMLElement).style.fontSize = `${parseFloat(originalFontSizes[tagName]) * fontSizeMultiplier}px`;
    });
  };

  const resetFontSize = () => {
    location.reload();
  };

  return {
    showLimitation,
    style,
    changeShowLimitation,
    increaseFontSize,
    toggleIncreaseFontSizeBig,
    toggleIncreaseFontSizeLgBig,
    toggleIncreaseFontSizeLgMoreBig,
    changeShowLimitationReset
  };
});
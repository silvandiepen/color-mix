<script setup lang="ts">
import { watch, computed } from "vue";
import Shades from './components/Shades.vue'
import Theme from './components/Theme.vue'
import Example from './components/Example.vue'
import Settings from './components/Settings.vue'
import Code from './components/Code.vue'
import { useColor } from './composables/useColor'

const { theme, colors, colorMode, contrastMode } = useColor();

watch(() => colorMode.value, (newColorMode) => {
  document.body.dataset.colorMode = newColorMode
}, {
  immediate: true
})

watch(() => contrastMode.value, (newContrastMode) => {
  document.body.dataset.contrastMode = newContrastMode
}, {
  immediate: true
})




const themeStyle = computed(() => {
  const themeStr = Object.entries(theme).reduce((acc, [key, value]) => `${acc}--${key}: var(--${value});`, '');
  const colorsStr = Object.entries(colors.value).reduce((acc, [key, value]) => `${acc}--${key}: ${value};`, '');

  return `${colorsStr} ${themeStr}`;

})

watch(() => themeStyle.value, (newThemeStyle) => {
  document.body.style.cssText = newThemeStyle

}, {
  immediate: true
})


</script>

<template>
  <div>
    <Settings />
    <Theme class="theme" />

    <section>
      <Shades></Shades>
    </section>

    <Example></Example>
    <Code></Code>
  </div>
</template>

<style lang="scss" src="./assets/style/app.scss"></style>

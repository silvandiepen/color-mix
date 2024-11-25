<template>

  <div :class="bemm()">
    <div :class="bemm('input')">
      <label for="showShades">showShades</label>
      <input id="showShades" type="checkbox" v-model="showShades" />
    </div>
    <div :class="bemm('input')">
      <label for="showTheme">showTheme</label>
      <input id="showTheme" type="checkbox" v-model="showTheme" />
    </div>
    <div :class="bemm('input')">
      <label for="showColorInput">showColorInput</label>
      <input id="showColorInput" type="checkbox" v-model="showColorInput" />
    </div>
    <div :class="bemm('input')">
      <label for="showColorSelect">showColorSelect</label>
      <input id="showColorSelect" type="checkbox" v-model="showColorSelect" />
    </div>

  </div>
</template>


<script lang="ts" setup>

import { useBemm } from "../utils/bemm";

const bemm = useBemm('settings')

import { useSettings } from '../composables/useSettings'

const { showTheme, showColorInput, showColorSelect,showShades} = useSettings()
</script>

<style lang="scss">
.settings {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--foreground);
  color: var(--background);
  padding: var(--space);
  margin: var(--space);
  border-radius: var(--border-radius);
transition: .3s ease-in-out;
  transform: translateX(-100%);
  &:hover{
    transform: translateX(0%);


  }

  &__input {
    justify-content: flex-end;
    display: flex;
    flex-direction: row-reverse
  }
}
</style>

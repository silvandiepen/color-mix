<template>
  <div :class="bemm()">
    <div v-for="(value, key) in colors" :class="bemm('color')" :style="`--color: var(--${key}, ${value})`">
      <h4>{{ key }}</h4>
      <div v-if="!showShades" :class="bemm('shade', `500`)" :data-shade="5" :style="`--shade: ${5}`"></div>
      <div
        v-if="showShades"
        v-for="n in 9"
        :class="bemm('shade',`${n * 100}`)"
        :data-shade="n"
        :style="`--shade: ${n}`"
        @mouseenter="hoveredShade = n"
        @mouseleave="hoveredShade = null"
      >
        <span :style="{ opacity: hoveredShade === n ? 1 : 0 }">{{ n* 100 }}</span>
      </div>
      <input v-if="showColorInput" type="color" :value="value" @change="(e:any) => {
        console.log(e.target.value)
        changeColor(key, e.target.value)
      }" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "../utils/bemm";
import { useColor } from "../composables/useColor";
import { useSettings } from "../composables/useSettings";
import { ref } from 'vue';

const bemm = useBemm('shades');
const { changeColor, colors } = useColor();
const { showColorInput, showShades } = useSettings();
const hoveredShade = ref<number | null>();
</script>

<style lang="scss">
.shades {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: fit-content;

  &__color {
    display: flex;
    gap: .5em;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    animation: slideIn 0.5s ease-out;
  }

  &__shade {
    width: 5vw;
    height: 8vw;
    border-radius: 4px;
    flex-shrink: 0;
    background-color: shade(var(--color), 100);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeIn 0.5s ease-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    @for $i from 1 through 10 {
      &[data-shade="#{$i}"] {
        background-color: global.shade(var(--color), $i * 100);
        animation-delay: $i * 0.1s;
      }
    }

    span {
      font-weight: 500;
      font-size: 1.25em;
      transition: all 0.3s ease;
      transform: translateY(0);
    }
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

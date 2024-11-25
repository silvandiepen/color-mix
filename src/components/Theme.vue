<template>

  <div :class="bemm()" v-if="showTheme">
    <h3>Theme</h3>
    <ul>
      <li :style="`--item-color: var(--primary)`">
        <label>Primary</label>
        <select v-model="theme.primary">
          <option v-for="(_, key) in colors">{{ key }}</option>
        </select>
      </li>
      <li :style="`--item-color: var(--secondary)`">
        <label>Secondary</label> <select v-model="theme.secondary">
          <option v-for="(_, key) in colors">{{ key }}</option>
        </select>
      </li>
      <li :style="`--item-color: var(--accent)`">

        <label>Accent</label> <select v-model="theme.accent">
          <option v-for="(_, key) in colors">{{ key }}</option>
        </select>
      </li>
      <hr>
      <li :style="`--item-color: var(--dark); --item-text: var(--light)`">
        <label>Dark</label> <select v-model="theme.dark">
          <option v-for="(_, key) in colors">{{ key }}</option>
        </select>
      </li>
      <li :style="`--item-color: var(--light); --item-text: var(--dark)`">
        <label>Light</label> <select v-model="theme.light">
          <option v-for="(_, key) in colors">{{ key }}</option>
        </select>
      </li>
      <hr>
      <li :style="`--item-color: var(--background); --item-text: var(--foreground)`">
        <label>ColorMode</label> <select :value="colorMode" @change="(e: any) => setColorMode(e.target?.value)">
          <option value="dark">Dark mode</option>
          <option value="light">Light mode</option>
        </select>
      </li>
      <li>
        <label>ContrastMode</label> <select :value="contrastMode" @change="(e: any) => setContrastMode(e.target?.value)">
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
      </li>
    </ul>

  </div>
</template>


<script lang="ts" setup>
import { useBemm } from '../utils/bemm'

const bemm = useBemm('theme');

import { useColor } from '../composables/useColor'
const { colors, theme, colorMode, contrastMode, setColorMode, setContrastMode } = useColor()

import { useSettings } from '../composables/useSettings'
const { showTheme } = useSettings()



</script>


<style lang="scss">
.theme {
  padding: var(--space);
  background-color: #{global.shade(var(--accent), 100)};
  border-radius: var(--border-radius);
  margin: var(--space);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h3 {
    color: var(--primary);
  }


  ul {
    list-style-type: none;
    margin: 0;
    display: flex;
    padding: 0;
    flex-direction: column;
    gap: var(--space);
  }

  li {

    border: 2px solid var(--item-color);
    background-color: #{global.shade(var(--item-color),200)};
    padding: var(--space);
    border-radius: var(--border-radius);
    color: var(--item-text, var(--item-color));
  }

  label {
    font-size: .75em;
    display: block;
    width: 100%;
    text-align: left;
    margin: .5em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--item-text, #{global.shade(var(--accent), 700)});
  }

}
</style>

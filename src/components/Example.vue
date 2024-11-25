<template>
  <div :class="bemm()">

    <div :class="bemm('intro')">
      <h1>Example</h1>
      <h3>Of how to use... </h3>
      <p>How to use colors...</p>
    </div>
    <div :class="bemm('cards')">

      <div :class="bemm('card')" v-for="card in cards" :style="`--card-color: var(--${card.color})`">

        <h2>{{ card.title }}</h2>
        <h3>{{ card.color }}</h3>
        <p>{{ card.text }}</p>

        <select v-model="card.color" v-if="showColorSelect">
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="accent">Accent</option>
          <option v-for="(value, key) in colors">{{ key }}</option>
        </select>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useBemm } from "../utils/bemm";
import { useColor } from "../composables/useColor";
import { useSettings } from "../composables/useSettings";
const { colors } = useColor();
const { showColorSelect } = useColor();
const bemm = useBemm('example');

const state = reactive({
  showSelect: false
})

const cards = ref([
  {
    title: 'Title of card',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex id aut voluptas cupiditate iure vitae illum neque tempora soluta nam at perferendis, atque veniam maiores voluptatibus blanditiis accusamus maxime',
    color: 'primary'
  },
  {
    title: 'Title of card',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex id aut voluptas cupiditate iure vitae illum neque tempora soluta nam at perferendis, atque veniam maiores voluptatibus blanditiis accusamus maxime',
    color: 'primary'
  },
  {
    title: 'Title of card',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex id aut voluptas cupiditate iure vitae illum neque tempora soluta nam at perferendis, atque veniam maiores voluptatibus blanditiis accusamus maxime',
    color: 'primary'
  },
  {
    title: 'Title of card',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex id aut voluptas cupiditate iure vitae illum neque tempora soluta nam at perferendis, atque veniam maiores voluptatibus blanditiis accusamus maxime',
    color: 'accent'
  },
  {
    title: 'Title of card',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex id aut voluptas cupiditate iure vitae illum neque tempora soluta nam at perferendis, atque veniam maiores voluptatibus blanditiis accusamus maxime',
    color: 'red'
  },
])

</script>


<style lang="scss">
.example {
  padding: 4vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: var(--accent);
  }

  &__card {
    background-color: var(--card-background-color, #{global.shade(var(--card-color), 300)});
    border: 2px solid var(--card-border-color, #{global.shade(var(--card-color), 500)});
    border-radius: var(--border-radius);
    padding: var(--space);
    text-align: left;
    color: var(--card-text-color, #{global.shade(var(--card-color), 800)});

    [data-contrast-mode="high"] & {
      --card-text-color: #{global.shade(var(--card-color), 1000)};
      --card-background-color: #{global.shade(var(--card-color), 100)};
      --card-border-color: #{global.shade(var(--card-color), 800)};
    }

    h3 {
      color: #{global.shade(var(--card-color), 600)};

      [data-contrast-mode="high"] & {
        color: #{global.shade(var(--card-color), 800)};
      }
    }

  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1em;
  }

}
</style>

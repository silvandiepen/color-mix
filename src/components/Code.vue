<template>
  <section class="code">


    <h2>From creating many classes</h2>
    <pre v-html="code4"></pre>
    <pre v-html="code2"></pre>

    <h2>To just using the custom property</h2>
    <pre v-html="code1"></pre>
    <pre v-html="code3"></pre>
  </section>
</template>

<script lang="ts" setup>


const escapeCode = (code: string) => {
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const code1 = escapeCode(`<div class="card" style="--card-color:var(--primary);"></div>`);
const code4 = escapeCode(`<div class="card card--red"></div>`);

const code2 = escapeCode(`
  @use "sass:color";

  $colors: {
    primary: #ff0000,
    secondary: #00ff00,
    accent: #0000ff,
  }

  .card{
    @each $color-name, $color-value in $colors {
      &--#{$color-name}{
        background-color: #{color.mix($color-value, transparent, 50%)};
        color: $color-value;
      }
    }
  }

  // The css;

  .card--primary{
    background-color: rgba(255, 0, 0, 0.5);
    color: #ff0000;
  }
  .card--secondary{
    background-color: rgba(0, 255, 0, 0.5);
    color: #00ff00;
  }
  .card--accent{
    background-color: rgba(0, 0, 255, 0.5);
    color: #0000ff;
  }
`);

const code3 = escapeCode(`
  .card{
    background-color: color-mix(in srgb, var(--card-color), transparent 50%);
    color: color-mix(in srgb, var(--card-color), var(--foreground) 50%);
  }

  // The css

  .card{
    background-color: color-mix(in srgb, var(--card-color), transparent 50%);
    color: color-mix(in srgb, var(--card-color), var(--foreground) 50%);
  }
`);


</script>

<style lang="scss">

.code{
  padding: var(--spacing);
  background-color: var(--secondary);

  display: flex; justify-content: center;
  flex-direction: column  ;
  gap: var(--spacing);
  pre{
    background-color: var(--background);
    color: var(--foreground);
    padding: var(--spacing);
    border-radius: var(--border-radius);
    font-size: 1.5em;
    width: calc(100% - (var(--spacing) * 2)); max-width: calc(100% - (var(--spacing) * 2));

  }
}

</style>

<script lang="ts">
  import { onMount } from 'svelte';

  let text;
  onMount(async () => {
    text = (await (await fetch('http://localhost:1337/api/header')).json()).data
      .attributes;
  });
</script>

<header>
  {#if text}
    <h1>{text.title}</h1>
    <p class="category">{text.business}</p>
    <p class="tagline">{text.tagline}</p>
    <div>
      <a class="btn" href="#">{text.cta}</a>
    </div>
  {/if}
</header>

<!-- <main>
  <h2>Portfolio</h2>
</main> -->
<style lang="scss">
  @import "./resources/scss/all.scss";

  header {
    @include container;

    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      margin-bottom: 6rem;

      opacity: 0.8;
    }

    .category {
      opacity: 0.6;
    }

    .tagline {
      max-width: 24ch;
      margin-bottom: 3rem;

      font-size: 3rem;
      font-weight: 800;
    }
  }
</style>

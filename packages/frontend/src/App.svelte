<script lang="ts">
  import { onMount } from 'svelte';
  import backend from "./backend";
  import { i18n } from "./lib/stores";
  import Nav from "./lib/Nav.svelte"
  import Btn from "./lib/buttons/Btn.svelte"

  let v_i18n;

  i18n.subscribe((value) => {
    v_i18n = value;
    loadStrings();
  });

  let strings;
  async function loadStrings() {
    try {
      strings = (await (await fetch(`${backend}/api/header?locale=${v_i18n.current}`)).json()).data
      .attributes;
    }
    catch (e) {}
  }

  onMount(loadStrings);
</script>

<Nav />

<header>
  {#if strings}
    <h1>{strings.title}</h1>
    <p class="category">{strings.business}</p>
    <h2 class="tagline">{strings.tagline}</h2>
    <div>
      <Btn isAccent isLarge>{strings.cta}</Btn>
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

      // font-size: 3rem;
      font-weight: 800;
    }
  }
</style>

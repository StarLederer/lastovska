<script lang="ts">
  import { onMount } from 'svelte';
  import backend from '../../backend';
  import { i18n } from '../stores';
  import Btn from '../btns/Btn.svelte';

  let vI18n;

  let strings;
  async function loadStrings() {
    try {
      strings = (
        await (
          await fetch(`${backend}/api/header?locale=${vI18n.current}`)
        ).json()
      ).data.attributes;
    } catch (e) {
      // ...
    }
  }

  i18n.subscribe((value) => {
    vI18n = value;
    loadStrings();
  });

  onMount(loadStrings);
</script>


<header>
  {#if strings}
    <h1>{strings.title}</h1>
    <p class="category">{strings.business}</p>
    <h2 class="tagline">{strings.tagline}</h2>
    <div>
      <Btn isAccent isLarge on:click={() => { window.popup.show(); }}>{strings.cta}</Btn>
    </div>
  {/if}
</header>

<style lang="scss">
  @import "../../resources/scss/all.scss";

  header {
    @include container;

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

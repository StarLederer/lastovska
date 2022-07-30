<script lang="ts">
  import { loadHtml } from '@webwriter/vite-plugin-svelte/lib/runtime';
  import { i18n } from '../../stores';
  import Btn from '../btns/Btn.svelte';
  import Txt from '../Txt.svelte';

  const book = 'home';
  let prodContent: any = {};
  $: loadHtml(`${$i18n.current}/${book}/index.json`).then((data) => {
    prodContent = data;
  });
</script>

<header>
  <h1><Txt {book} chapter="name" {prodContent} /></h1>
  <p class="category"><Txt {book} chapter="business" {prodContent} /></p>
  <h2 class="tagline"><Txt {book} chapter="tagline" {prodContent} /></h2>
  <div>
    <Btn
      isAccent
      isLarge
      on:click={() => {
        window.popup.show();
      }}
    >
      <Txt {book} chapter="cta" {prodContent} />
    </Btn>
  </div>
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

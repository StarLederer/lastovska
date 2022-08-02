<script lang="ts">
  import Txt from '~/lib/Txt.svelte';
  import Btn from '~/lib/btns/Btn.svelte';

</script>

<header>
  <h1><Txt chapter="business-name" /></h1>
  <p class="category"><Txt chapter="business-category" /></p>
  <h2 class="tagline"><Txt chapter="business-tagline" /></h2>
  <div>
    <Btn
      isAccent
      isLarge
      on:click={() => {
        window.popup.show();
      }}
    >
      <Txt chapter="cta" />
    </Btn>
  </div>
</header>

<style lang="scss">
  @import "../resources/scss/all.scss";

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

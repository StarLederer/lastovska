<script lang="ts">
  import Email from 'svelte-material-icons/Email.svelte';
  import Phone from 'svelte-material-icons/Phone.svelte';
  import { loadHtml } from '@webwriter/vite-plugin-svelte/lib/runtime';

  import Txt from '~/lib/Txt.svelte';
  import { i18n } from '~/stores';

  const book = 'contact';
  let prodContent: any = {};
  $: loadHtml(`${$i18n.current}/${book}/index.json`).then((data) => {
    prodContent = data;
  });
</script>

<section class="contact container">
  <h2><Txt {book} chapter="section-title" {prodContent} /></h2>
  <div class="fields">
    <div class="field">
      <div class="icon"><Phone size="1rem" /></div>
      <p><Txt {book} chapter="phone-number" {prodContent} /></p>
    </div>

    <div class="field">
      <div class="icon"><Email size="1rem" /></div>
      <p><Txt {book} chapter="email-address" {prodContent} /></p>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../resources/scss/all.scss";

  .fields {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .field {
    display: flex;
    gap: 1rem;
  }
</style>

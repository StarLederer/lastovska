<script lang="ts">
  import Email from 'svelte-material-icons/Email.svelte';
  import Phone from 'svelte-material-icons/Phone.svelte';

  import Txt from '~/lib/Txt.svelte';
</script>

<section class="contact container">
  <h2><Txt chapter="contact-title" /></h2>
  <div class="fields">
    <div class="field">
      <div class="icon"><Phone size="1rem" /></div>
      <p><Txt chapter="phone-number" noI18n/></p>
    </div>

    <div class="field">
      <div class="icon"><Email size="1rem" /></div>
      <p><Txt chapter="email-address" noI18n/></p>
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

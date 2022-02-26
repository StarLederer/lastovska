<script lang="ts">
  import { onMount } from 'svelte';
  import Email from 'svelte-material-icons/Email.svelte';
  import Phone from 'svelte-material-icons/Phone.svelte';
  import backend from '../../backend';
  import { i18n } from '../stores';

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

<section class="contact container">
  <h2>Contact details</h2>
  <div class="fields">
    <div class="field">
      <div class="icon"><Phone size="1rem"/></div>
      <p>+371 00000000</p>
    </div>

    <div class="field">
      <div class="icon"><Email size="1rem"/></div>
      <p>work.lastovska (@) gmail.com</p>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../../resources/scss/all.scss";

  .fields {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .field {
    display: flex;
    gap: 1rem
  }
</style>

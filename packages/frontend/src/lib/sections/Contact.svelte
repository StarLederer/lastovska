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

<section class="contact container">
  <h2>Contact details</h2>
  <p>phone: +371 00000000</p>
  <p>email: work.lastovska (@) gmail.com</p>
</section>

<style lang="scss">
  @import "../../resources/scss/all.scss";

</style>

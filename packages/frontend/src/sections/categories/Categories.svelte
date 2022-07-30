<script lang="ts">
  import AccountGroup from 'svelte-material-icons/AccountGroup.svelte';
  import Creation from 'svelte-material-icons/Creation.svelte';
  import ImageFrame from 'svelte-material-icons/ImageFrame.svelte';
  import { loadHtml } from '@webwriter/vite-plugin-svelte/lib/runtime';

  import Txt from '~/lib/Txt.svelte';
  import { i18n } from '~/stores';

  import Category from './Category.svelte';

  const book = 'categories';
  let prodContent: any = {};
  $: loadHtml(`${$i18n.current}/${book}/index.json`).then((data) => {
    prodContent = data;
  });

  const cards = [
    {
      icon: ImageFrame,
      name: 'portrait',
    },
    {
      icon: AccountGroup,
      name: 'events',
    },
    {
      icon: Creation,
      name: 'creative',
    },
  ];
</script>

<section class="categories container">
  <h2><Txt {book} chapter="section-title" {prodContent}/></h2>
  <div class="card-container">
    {#each cards as card}
      <Category name={card.name} icon={card.icon} />
    {/each}
  </div>

  <!-- <section class="cta">
    <h3>Have any questions or got a unique project?</h3>
    <Btn isLarge isAccent>Get in touch</Btn>
  </section> -->
</section>

<style lang="scss">
  @import "../../../resources/scss/all.scss";

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: $breakpoint-m) {
      flex-direction: row;
    }
  }

  // .cta {
  //   margin-top: 2rem;
  //   // display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   // align-items: center;
  // }
</style>

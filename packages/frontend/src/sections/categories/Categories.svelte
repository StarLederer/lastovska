<script lang="ts">
  import AccountGroup from 'svelte-material-icons/AccountGroup.svelte';
  import Creation from 'svelte-material-icons/Creation.svelte';
  import ImageFrame from 'svelte-material-icons/ImageFrame.svelte';

  import Txt from '~/lib/Txt.svelte';

  import Category from './Category.svelte';

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
  <h2><Txt chapter="categories-title"/></h2>
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
  @import "../../resources/scss/all.scss";

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

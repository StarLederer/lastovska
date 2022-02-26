<script lang="ts">
  import { onMount } from 'svelte';
  import AccountGroup from 'svelte-material-icons/AccountGroup.svelte';
  import Creation from 'svelte-material-icons/Creation.svelte';
  import ImageFrame from 'svelte-material-icons/ImageFrame.svelte';
  import backend from '../../../backend';
  import { i18n } from '../../stores';
  import Category from './Category.svelte';

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

  // TMP
  const cards = [
    {
      icon: ImageFrame,
      title: 'Portrait',
      description:
        'I will capture portrait photograps suitable for profile pictures, professional portfolios, documents and marketing materials. Various backgrounds and visual styles are possible.',
    },
    {
      icon: AccountGroup,
      title: 'Events',
      description:
        'I capture best moments of the event to be preserved in history. Weddings, concerts and corporate events are all exelent examples. You receive pictures optimized and perfected for marketing or personal use.',
    },
    {
      icon: Creation,
      title: 'Creative',
      description:
        'Bring your idea and collaborate with me to create an outstanding visaul story. Costumes, extraordinary make-up and unique locations all around the world are ideal.',
    },
  ];
</script>

<section class="categories container">
  <h2>My services</h2>
  <div class="card-container">
    {#each cards as data}
      <Category {data} />
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

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

  // TMP
  const cards = [
    {
      title: 'Portrait',
      description:
        'Describe what kind of service this is and when should the customer buy it.',
    },
    {
      title: 'Events',
      description:
        'I capture best moments of the event to be preserved in history. Weddings, concerts and corporate events are all exelent examples. You receive pictures optimized and perfected for marketing or personal use.',
    },
    {
      title: 'Creative',
      description:
        'Bring your idea and collaborate with me to create an outstanding visaul story. Costumes, extraordinary make-up and unique locations all around the world are ideal.',
    },
  ];
</script>

<section class="categories container">
  <h2>My services</h2>
  <div class="card-container">
    {#each cards as card}
      <section class="card">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <!-- <div style="height: 400px; background: black"></div> -->
        <!-- <div class="btns">
          <Btn isGhost>Make an appointment</Btn>
        </div> -->
      </section>
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
    gap: 2rem;
  }

  // .cta {
  //   margin-top: 2rem;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  // }

  h3 {
      margin-bottom: 1rem;
    }

  .card {
    // padding: 2rem;

    // background: mix($color-fg, transparent, 5%);
    // border-radius: 1rem;

    flex: 1;

    p {
      opacity: 0.6;
      max-width: 48ch;
    }
  }
</style>

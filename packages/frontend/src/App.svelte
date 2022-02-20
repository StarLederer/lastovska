<script lang="ts">
  import Nav from './lib/Nav.svelte';
  import Header from './lib/sections/Header.svelte';
  import Gallery from './lib/sections/Gallery.svelte';
  import Categories from './lib/sections/Categories.svelte';
  import Contact from './lib/sections/Contact.svelte';
  import Popup from './lib/sections/Popup.svelte';
</script>

<main>
  <Nav />

  <div class="header-wrapper">
    <Header />
  </div>

  <Gallery />
  <Categories />
  <Contact />
</main>

<Popup />

<style lang="scss">
  @import "./resources/scss/all.scss";

  .header-wrapper {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @media screen and (min-height: $breakpoint-l) {
    .header-wrapper {
      padding-top: 20rem;
      padding-bottom: 20rem;
    }
  }

  main {
    width: 100vw;
    height: 100vh;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
    row-gap: 6rem;
    overflow: auto;
  }
</style>

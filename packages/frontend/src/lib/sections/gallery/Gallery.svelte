<script lang="ts">
  import { onMount } from 'svelte';
  import Masonry from 'svelte-bricks';
  import backend from '../../../backend';
  import Viewer from './Viewer.svelte';
  // import { i18n } from './stores';

  let viewer;
  let projects = [];

  onMount(async () => {
    projects = (
      await (await fetch(`${backend}/api/projects?populate=picture`)).json()
    ).data;
  });
</script>

<section>
  <div class="container">
    <h2>Gallery</h2>
    <Masonry items={projects} let:item gap={4}>
      <button
        on:click={() => {
          viewer.loadProject(item.id);
        }}
      >
        <img
          src={item.attributes.picture.data.attributes.formats.medium.url}
          alt={item.attributes.picture.data.attributes.alternativeText}
        />
      </button>
    </Masonry>
  </div>
</section>

<Viewer bind:this={viewer} />

<style lang="scss">
  @import "../../../resources/scss/all.scss";

  button {
    img {
      width: 100%;
      display: block;
      opacity: 0.8;
      filter: saturate(0);

      transition: $trans-s;
    }

    &:hover,
    &:focus {
      img {
        opacity: 1;
        filter: saturate(1);
      }
    }
  }
</style>

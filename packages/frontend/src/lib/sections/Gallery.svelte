<script lang="ts">
  import Masonry from 'svelte-bricks';
  import { onMount } from 'svelte';
  import backend from '../../backend';
  // import { i18n } from './stores';

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
      <article>
        <img
          src={item.attributes.picture.data.attributes.formats.medium.url}
          alt={item.attributes.picture.data.attributes.alternativeText}
        />
      </article>
    </Masonry>
  </div>
</section>

<style lang="scss">
  @import "../../resources/scss/all.scss";

  article {
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

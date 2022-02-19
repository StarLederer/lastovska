<script lang="ts">
  import backend from "../backend";
  import { i18n } from "./stores";
  import Masonry from "svelte-bricks";
  import { onMount } from "svelte";

  let projects = [];

  onMount(async () => {
    projects = (
      await (await fetch(`${backend}/api/projects?populate=picture`)).json()
    ).data;
    console.log(projects);
  });
</script>

<section>
  <div class="container">
    <Masonry items={projects} let:item gap={4}>
      <article>
        <img
          src={`${backend}${item.attributes.picture.data.attributes.formats.medium.url}`}
          alt={item.attributes.picture.data.attributes.alternativeText}
        />
      </article>
    </Masonry>
  </div>
</section>

<style lang="scss">
  @import "../resources/scss/all.scss";

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

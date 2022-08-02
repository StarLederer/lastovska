<script lang="ts">
  import { onMount } from 'svelte';
  import Close from 'svelte-material-icons/KeyboardBackspace.svelte';

  import backend from '~/backend';
  import Txt from '~/lib/Txt.svelte';
  import Btn from '~/lib/btns/Btn.svelte';

  let project;
  let isOpen = false;

  onMount(async () => {});

  const loadProject = async (projectId: string) => {
    isOpen = true;

    project = (
      await (
        await fetch(`${backend}/api/projects/${projectId}?populate=picture`)
      ).json()
    ).data;
  };

  export { loadProject };
</script>

<section class="viewer" class:is-open={isOpen}>
  <div class="controls">
    <div class="container">
      <div class="btns">
        <Btn
          on:click={() => {
            isOpen = false;
          }}
        >
          <Close size="1.5rem" />
          <Txt chapter="back-btn"></Txt>
        </Btn>
      </div>
    </div>
  </div>
  <div class="canvas">
    {#if project}
      <img src={project.attributes.picture.data.attributes.url} alt="" />
    {/if}
  </div>
</section>

<style lang="scss">
  @import "../../resources/scss/all.scss";

  .viewer {
    width: 100vw;
    height: 100vh;
    background: $color-bg;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    display: none;

    .controls {
      padding-top: 1rem;
      padding-bottom: 1rem;
      position: relative;
      z-index: 1;

      background: mix($color-bg, transparent, 60%);

      .btns {
        margin: 0 -1rem;
      }
    }

    .canvas {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
        max-height: 100%;
        background: black;
      }
    }

    &.is-open {
      display: block;
    }
  }
</style>

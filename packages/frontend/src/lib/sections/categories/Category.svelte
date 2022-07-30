<script lang="ts">
  import { loadHtml } from '@webwriter/vite-plugin-svelte/lib/runtime';
  import Txt from '../../Txt.svelte';
  import Btn from '../../btns/Dummy.svelte';
  import { i18n } from '../../../stores';

  const book = 'categories';
  let prodContent: any = {};
  $: loadHtml(`${$i18n.current}/${book}/index.json`).then((data) => {
    prodContent = data;
  });

  let isFocus;
  let isHover;

  export let name: string;
  export let icon;
</script>

<button
  class="card"
  class:is-force-focus={isFocus}
  on:focus={() => {
    isFocus = true;
  }}
  on:blur={() => {
    isFocus = false;
  }}
  on:mouseenter={() => {
    isHover = true;
  }}
  on:mouseleave={() => {
    isHover = false;
  }}
  on:click={() => {
    window.popup.show();
  }}
>
  <div class="info">
    <div class="icon">
      <svelte:component this={icon} size="2rem" />
    </div>
    <h3><Txt {book} chapter={`${name}-title`} {prodContent} /></h3>
    <p><Txt {book} chapter={`${name}-description`} {prodContent} /></p>
  </div>
  <div class="ctas btns">
    <div class="popper">
      <Btn isGhost isFocused={isHover || isFocus}>
        <Txt {book} chapter={'button'} {prodContent} />
      </Btn>
    </div>
  </div>
</button>

<style lang="scss">
  @import "../../../resources/scss/all.scss";

  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .popper:hover {
    animation: pop $trans-l;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .card {
    padding: calc(1rem - 2px);

    color: unset;
    text-decoration: unset;
    border: 2px solid;
    border-color: mix($color-fg, transparent, 5%);
    border-radius: 1rem;

    flex: 1;
    transition: $trans-m;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    @media screen and (min-width: $breakpoint-l) {
      padding: calc(2rem - 2px);
      gap: 2rem;
    }

    .info {
      transition: inherit;

      .icon {
        opacity: 0.2;
        transition: inherit;
      }

      h3 {
        margin: 0.5rem 0;
      }

      p {
        opacity: 0.6;
        max-width: 48ch;
        transition: inherit;
      }
    }

    &:hover,
    &.is-force-focus {
      border-color: mix($color-fg, transparent, 20%);

      .icon {
        opacity: 0.6;
      }

      p {
        opacity: 0.8;
      }
    }
  }
</style>

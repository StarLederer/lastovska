<script lang="ts">
  import { onMount } from "svelte";
  import { i18n } from "./stores";
  import Btn from "./buttons/Btn.svelte"

  let v_i18n;

  i18n.subscribe((value) => {
    v_i18n = value;
  });
</script>

<nav>
<div class="container">
  {#if i18n}
  <ul class="locale-switcher">
    {#each v_i18n.locales as locale}
      <li>
        <Btn on:click={() => {
          i18n.update(o => {
            o.current = locale;
            return o
          })
        }}>
          <span class:is-selected={v_i18n.current === locale}>{locale}</span>
        </Btn>
      </li>
    {/each}
  </ul>
{/if}
</div>
</nav>

<style lang="scss">
  @import "../resources/scss/all.scss";

  nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;

    .locale-switcher {
      padding: 2rem 0;

      display: flex;
      list-style-type: none;

      .is-selected {
        text-decoration: underline;
      }
    }
  }
</style>

<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let isAccent = false;
  export let isLarge= false;
</script>

<button
  class="btn"
  class:is-accent={isAccent}
  class:is-large={isLarge}
  on:click={() => {
    dispatch("click");
  }}
>
  <!-- <div> -->
    <slot />
  <!-- </div> -->
</button>

<style lang="scss">
  @import "./style.scss";
</style>

<script lang="ts">
  import Btn from '../btns/Btn.svelte';
  import Contact from './Contact.svelte';

  export let isVisible = false;

  window.popup = {
    show() {
      isVisible = true;
    },
  };
</script>

<aside class="popup" class:is-visible={isVisible}>
  <Contact />
  <div class="container">
    <div class="btns">
      <Btn isGhost on:click={() => { isVisible = false; }}>Back</Btn>
    </div>
  </div>
</aside>

<style lang="scss">
  @import "../../resources/scss/all.scss";

  .popup {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background: $color-bg;

    display: flex;
    flex-direction: column;
    justify-content: center;

    opacity: 0;
    transform: scale(1.2);
    pointer-events: none;
    transition: $trans-s;

    .btns {
      margin-top: 3rem;
    }

    &.is-visible {
      opacity: 1;
      transform: scale(1);
      pointer-events: all;
    }
  }
</style>

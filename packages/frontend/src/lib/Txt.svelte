<script lang="ts">
  import { Webwriter } from 'vite-plugin-content-editor-svelte/components';
  import { getProdContentStore, i18n } from '~/stores';

  let prodContent;

  $: (async () => {
    const store = await getProdContentStore(`${$i18n.current}/index.json`);

    store.subscribe((content) => {
      prodContent = content;
    });
  })();

  $: path = noI18n ? `common/${chapter}.txt` : `${$i18n.current}/${chapter}.txt`;

  export let chapter: string;
  export let noI18n = false;
</script>

<Webwriter {path}>
  {#if prodContent && prodContent[chapter]}
    {@html prodContent[chapter]}
  {:else}
    ...
  {/if}
</Webwriter>

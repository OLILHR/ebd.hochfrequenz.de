<script lang="ts">
  import { onMount } from "svelte";
  import { FormatVersionSelect, EbdSelect } from "$lib";
  import type { PageData } from "./$types";

  export let data: PageData;

  let selectedFormatVersion = data.selectedFormatVersion;
  let ebds = data.ebds;

  async function handleFormatVersionSelect(event: CustomEvent<string>) {
    selectedFormatVersion = event.detail;
    if (selectedFormatVersion) {
      const response = await fetch(
        `/api/ebd?formatVersion=${selectedFormatVersion}`,
      );
      ebds = await response.json();
    } else {
      ebds = [];
    }
  }

  onMount(async () => {
    if (selectedFormatVersion) {
      const response = await fetch(
        `/api/ebd?formatVersion=${selectedFormatVersion}`,
      );
      ebds = await response.json();
    }
  });
</script>

<div
  class="container mx-auto h-full px-6 flex max-w-6xl justify-between items-center"
>
  <div class="w-3/5">
    <h2
      class="border-b border-secondary inline-block pb-[12px] uppercase mt-12"
    >
      Entscheidungsbaumdiagramme - aber es sind actually Diagramme.
    </h2>
  </div>

  <div class="w-2/5 flex flex-col">
    <div class="mb-4 pb-8">
      <FormatVersionSelect
        formatVersions={data.formatVersions}
        selectedVersion={selectedFormatVersion}
        on:select={handleFormatVersionSelect}
      />
    </div>
    <div class="mt-4">
      <EbdSelect {ebds} disabled={!selectedFormatVersion} />
    </div>
  </div>
</div>

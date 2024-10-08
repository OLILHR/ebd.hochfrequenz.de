<script lang="ts">
  import "../../../../app.scss";
  import { EbdFormHeader } from "$lib";
  import { page } from "$app/stores";

  $: ({ formatVersions } = $page.data);
  $: ({ formatVersion, ebd } = $page.params);
</script>

<div class="flex flex-col hfill">
  <EbdFormHeader
    {formatVersions}
    currentFormatVersion={formatVersion}
    currentEbd={ebd}
  />

  <main class="flex-grow overflow-auto">
    <slot />
  </main>
</div>

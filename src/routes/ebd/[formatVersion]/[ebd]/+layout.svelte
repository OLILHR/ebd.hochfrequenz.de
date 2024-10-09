<script lang="ts">
  import "../../../../app.scss";
  import { EbdFormHeader } from "$lib";
  import { page } from "$app/stores";

  $: ({ formatVersions, ebds } = $page.data);
  $: ({ formatVersion, ebd } = $page.params);
</script>

<div class="flex flex-col h-full">
  <EbdFormHeader
    {formatVersions}
    {ebds}
    currentFormatVersion={formatVersion}
    currentEbd={ebd}
  />
  <div class="flex-grow overflow-hidden">
    <slot />
  </div>
</div>

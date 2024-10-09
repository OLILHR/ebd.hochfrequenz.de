<script lang="ts">
  import "../../../../app.scss";
  import { EbdFormHeader } from "$lib";
  import { page } from "$app/stores";

  $: ({ formatVersions, ebds } = $page.data);
  $: ({ formatVersion, ebd } = $page.params);
</script>

<div class="flex flex-col min-h-screen">
  <EbdFormHeader
    {formatVersions}
    {ebds}
    currentFormatVersion={formatVersion}
    currentEbd={ebd}
  />
  <main class="flex-grow flex flex-col justify-center items-center py-8">
    <div class="w-11/12 max-w-[90vw] flex justify-center items-center">
      <slot />
    </div>
  </main>
</div>

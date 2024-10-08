<script lang="ts">
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import { IconLogo, EbdSelect, FormatVersionSelect } from "$lib";

  type FormatVersion = {
    code: string;
    detailedFormatVersion: string;
  };

  export let formatVersions: FormatVersion[] = [];
  export let ebds: Record<string, string[]> = {};
  export let currentFormatVersion = "";
  export let currentEbd = "";

  let selectedFormatVersion = currentFormatVersion;
  let selectedEbd = currentEbd;
  $: currentEbds = ebds[selectedFormatVersion] || [];

  function handleFormatVersionSelect(event: CustomEvent<string>) {
    selectedFormatVersion = event.detail;
    selectedEbd = "";
  }

  function handleEbdSelect(event: CustomEvent<string>) {
    selectedEbd = event.detail;
  }
</script>

<header class="bg-secondary">
  <nav
    class="mx-auto my-1 flex items-center justify-between px-6 py-4"
    aria-label="Global"
  >
    <div class="flex items-center w-3/4">
      <a href="{base}/" title="landingpage" class="flex-none items-center mr-4">
        <IconLogo size={24} />
      </a>
      <span class="text-xl text-white">EBD.HOCHFREQUENZ.DE</span>
      <div class="-mt-12 pl-10 w-1/6">
        <FormatVersionSelect
          {formatVersions}
          selectedVersion={selectedFormatVersion}
          on:select={handleFormatVersionSelect}
        />
      </div>
      <div class="-mt-2 pl-5 w-1/3">
        <EbdSelect
          ebds={currentEbds}
          {selectedEbd}
          on:select={handleEbdSelect}
        />
      </div>
    </div>
  </nav>
</header>

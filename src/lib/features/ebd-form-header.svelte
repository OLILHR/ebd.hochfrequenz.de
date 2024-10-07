<script>
  import { base } from "$app/paths";
  import { IconLogo } from "$lib";
  import { EbdSelect } from "$lib";
  import { FormatVersionSelect } from "$lib";

  export let disableEbdSelect = false;
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
        <FormatVersionSelect />
      </div>
      <div class="-mt-2 pl-5 w-1/3">
        <EbdSelect disabled={disableEbdSelect} />
      </div>
    </div>
  </nav>
</header>

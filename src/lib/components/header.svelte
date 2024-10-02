<script>
  import { IconLogo } from "$lib";
</script>

<header class="bg-primary">
  <nav class="mx-auto flex items-center px-6 py-4" aria-label="Global">
    <a href="/" title="landingpage" class="flex-none items-center">
      <IconLogo size={24} />
    </a>
    <span class="text-xl text-white flex items-center me-14"
      >EBD.HOCHFREQUENZ.DE</span
    >
    <div class="flex-grow">
      <slot name="ahb-search-form-header"></slot>
    </div>
    <div class="flex-none">
      <slot name="input-search-enhanced"></slot>
    </div>
  </nav>
</header>

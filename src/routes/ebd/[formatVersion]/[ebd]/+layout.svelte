<script>
  import "../../../../app.scss";
  import { EbdFormHeader } from "$lib";
</script>

<div class="flex flex-col hfill">
  <EbdFormHeader disableEbdSelect={false} />

  <main class="flex-grow overflow-auto">
    <slot />
  </main>
</div>

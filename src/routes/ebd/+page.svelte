<script>
  import { FormatVersionSelect, EbdSelect } from "$lib";
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
      <FormatVersionSelect />
    </div>
    <div class="mt-4">
      <EbdSelect />
    </div>
  </div>
</div>

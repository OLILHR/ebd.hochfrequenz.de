<script lang="ts">
  import { base } from "$app/paths";

  export let currentFormatVersion: string = "";
  export let currentEbd: string = "";
  export let disabled: boolean = false;

  async function handleExport() {
    if (currentFormatVersion && currentEbd) {
      const ebdFile = `E_${currentEbd.slice(1)}`;
      const ebdPath = `${base}/ebd/${currentFormatVersion}/${ebdFile}.svg`;

      try {
        const response = await fetch(ebdPath);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const svgContent = await response.text();

        const blob = new Blob([svgContent], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `EBD_E_${currentEbd.slice(1)}_${currentFormatVersion}.svg`; // output format: EBD_<EBD>_<FormatVersion>.svg
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (err) {
        console.error(`error exporting SVG: ${err}`);
      }
    }
  }
</script>

<button
  on:click={handleExport}
  {disabled}
  class="rounded-full bg-tint text-[16px] font-bold py-3 px-5 text-secondary"
>
  Export SVG
</button>

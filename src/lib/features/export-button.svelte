<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";

  export let currentFormatVersion: string = "";
  export let currentEbd: string = "";

  let isExportReady = true;
  let cooldownTimer: ReturnType<typeof setTimeout>;

  onMount(() => {
    return () => {
      if (cooldownTimer) clearTimeout(cooldownTimer);
    };
  });

  async function handleExport() {
    if (!isExportReady || !currentFormatVersion || !currentEbd) return;

    isExportReady = false;
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
      a.download = `EBD_E_${currentEbd.slice(1)}_${currentFormatVersion}.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(`error exporting SVG: ${err}`);
    }

    cooldownTimer = setTimeout(() => {
      isExportReady = true;
    }, 10000); // 10 seconds cooldown to prevent spamming the download button
  }
</script>

<button
  on:click={handleExport}
  class="rounded-full bg-tint text-[16px] font-bold py-3 px-5 text-secondary"
>
  Export SVG
</button>

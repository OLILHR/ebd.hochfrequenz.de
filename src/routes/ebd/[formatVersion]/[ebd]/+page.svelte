<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  let svgContainer: HTMLDivElement;
  let svgContent = "";

  $: ({ formatVersion, ebd } = $page.params);

  async function loadSvg() {
    const ebdFile = `E_${ebd.slice(1)}`;
    const ebdPath = `${base}/ebd/${formatVersion}/${ebdFile}.svg`;

    try {
      const response = await fetch(ebdPath);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      svgContent = await response.text();
    } catch (err) {
      console.error(`error loading SVG: ${err}`);
      svgContent =
        '<svg><text x="50" y="50" fill="red">Error loading SVG. Please check the console for details.</text></svg>';
    }

    // ensures SVGs will scale to fit the available space while maintaining their aspect ratio despite any preset dimensions
    const svg = svgContainer.querySelector("svg");
    if (svg) {
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.style.display = "block";
    }
  }

  $: if (formatVersion && ebd) {
    loadSvg();
  }

  onMount(() => {
    if (formatVersion && ebd) {
      loadSvg();
    }
  });
</script>

<div
  class="max-w-[95vw] mx-auto h-full flex items-center justify-center"
  bind:this={svgContainer}
>
  {@html svgContent}
</div>

<style>
  div :global(svg) {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
</style>

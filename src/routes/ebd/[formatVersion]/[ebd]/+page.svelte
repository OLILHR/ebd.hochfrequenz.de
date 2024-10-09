<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  let svgContainer: HTMLDivElement;

  onMount(() => {
    // ensures SVGs will scale to fit the available space while maintaining their aspect ratio despite their preset dimensions
    const svg = svgContainer.querySelector("svg");
    if (svg) {
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.style.display = "block";
    }
  });
</script>

<div
  class="max-w-[95vw] mx-auto h-full flex items-center justify-center"
  bind:this={svgContainer}
>
  {@html data.ebdContent}
</div>

<style>
  div :global(svg) {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let ebds: string[] = [];
  export let disabled: boolean = false;
  export let selectedEbd: string = "";

  const dispatch = createEventDispatcher<{ select: string }>();

  function handleSelect() {
    dispatch("select", selectedEbd);
  }

  $: if (!ebds.includes(selectedEbd)) {
    selectedEbd = "";
  }
</script>

<div class="flex flex-col items-start mt-2 w-full relative">
  <div class="w-full" class:opacity-50={disabled}>
    <select
      id="ebd-select"
      bind:value={selectedEbd}
      on:change={handleSelect}
      {disabled}
      class="inline-block border-2 border-white rounded-lg bg-secondary py-3 ps-2 pe-4 focus:outline-0 w-full"
      class:cursor-pointer={!disabled}
    >
      <option value="">Bitte auswählen</option>
      {#each ebds as ebd}
        <option value={ebd}>{ebd}</option>
      {/each}
    </select>
  </div>
  <label
    for="ebd-select"
    class="absolute top-0 left-3 -translate-y-1/2 text-xs border-white rounded inline-block text-slate-500 text-[12px] bg-white px-1"
  >
    EBD
  </label>
</div>

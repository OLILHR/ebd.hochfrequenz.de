<script lang="ts">
  export let ebds: string[] = [];
  export let disabled: boolean = true;
</script>

<div class="flex flex-col items-start mt-2 w-full">
  <select
    id="ebd-select"
    {disabled}
    class="inline-block border-2 border-white rounded-lg bg-secondary py-3 ps-3 pe-8 focus:outline-0 w-full cursor-pointer"
    class:opacity-50={disabled}
  >
    <option value="">Bitte auswählen</option>
    {#each ebds as ebd}
      <option value={ebd}>{ebd}</option>
    {/each}
  </select>
  <label
    for="ebd-select"
    class="ml-3 -mt-14 text-xs border-white rounded inline-block text-slate-500 text-[12px] bg-white px-1"
  >
    EBD
  </label>
</div>

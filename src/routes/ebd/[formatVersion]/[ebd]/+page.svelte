<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="w-full h-full flex justify-center items-center">
  {@html data.ebdContent}
</div>

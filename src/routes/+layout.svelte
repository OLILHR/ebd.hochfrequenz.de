<script lang="ts">
  import "../app.scss";
  import { Footer } from "$lib";
  import { onMount } from "svelte";
  import auth from "../auth/authService";

  onMount(async () => {
    await auth.checkAuth();
  });
</script>

<div class="flex flex-col h-screen">
  <main class="flex-grow flex flex-col overflow-hidden">
    <slot />
  </main>
  <Footer />
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>

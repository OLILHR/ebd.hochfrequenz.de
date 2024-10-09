<script>
  import "../app.scss";
  import { Footer } from "$lib";
</script>

<div class="flex flex-col min-h-screen">
  <main class="flex-grow flex flex-col">
    <slot />
  </main>
  <Footer />
</div>

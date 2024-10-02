<script>
  import "../../app.scss";
  import { Header, Footer } from "$lib";
</script>

<div class="flex flex-col h-screen">
  <Header />

  <main class="flex-grow overflow-auto">
    <slot />
  </main>

  <Footer />
</div>

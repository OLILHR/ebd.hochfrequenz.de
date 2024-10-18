<script lang="ts">
  import { onMount } from "svelte";
  import auth from "../../auth/authService";
  import { isAuthenticated, user } from "../../store";

  onMount(async () => {
    const client = await auth.createClient();

    if (
      window.location.search.includes("code=") ||
      window.location.search.includes("error=")
    ) {
      await client.handleRedirectCallback();
      window.history.replaceState({}, document.title, "/");
    }

    await auth.checkAuth();
  });

  async function login() {
    await auth.loginWithPopup();
  }

  async function logout() {
    await auth.logout();
  }
</script>

{#if $isAuthenticated}
  <button
    on:click={logout}
    class="rounded-full bg-tint text-[16px] font-bold py-3 px-5 text-secondary"
  >
    Ausloggen
  </button>
{:else}
  <button
    on:click={login}
    class="rounded-full bg-tint text-[16px] font-bold py-3 px-5 text-secondary"
  >
    Einloggen
  </button>
{/if}

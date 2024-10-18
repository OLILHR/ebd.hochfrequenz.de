<script lang="ts">
  import { onMount } from "svelte";
  import auth from "../../auth/authService";
  import { isAuthenticated, user } from "../../store";
  import type { Auth0Client } from "@auth0/auth0-spa-js";

  let client: Auth0Client;

  onMount(async () => {
    client = await auth.createClient();

    try {
      if (window.location.search.includes("code=")) {
        await client.handleRedirectCallback();
      }
    } catch (e) {}

    const authenticated = await client.isAuthenticated();
    isAuthenticated.set(authenticated);

    if (authenticated) {
      const userData = await client.getUser();
      user.set(userData || {});
    }
  });

  async function login() {
    if (!client) return;
    await auth.loginWithPopup(client);
    isAuthenticated.set(await client.isAuthenticated());
    const userData = await client.getUser();
    user.set(userData || {});
  }

  async function logout() {
    if (!client) return;
    await auth.logout(client);
    user.set({});
    isAuthenticated.set(false);
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

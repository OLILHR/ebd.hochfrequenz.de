import { Auth0Client, createAuth0Client, User } from "@auth0/auth0-spa-js";
import type { LogoutOptions } from "@auth0/auth0-spa-js";
import { user, isAuthenticated, popupOpen } from "../store";
import config from "./auth_config";

let auth0Client: Auth0Client;

async function createClient(): Promise<Auth0Client> {
  auth0Client = await createAuth0Client({
    domain: config.domain,
    clientId: config.clientId,
    cacheLocation: "localstorage",
    useRefreshTokens: true,
  });

  return auth0Client;
}

async function loginWithPopup(options?: any): Promise<void> {
  popupOpen.set(true);
  try {
    await auth0Client.loginWithPopup(options);
  } catch (e) {
    console.error(e);
  } finally {
    popupOpen.set(false);
  }
  await updateAuthStore();
}

async function logout(): Promise<void> {
  const logoutOptions: LogoutOptions = {
    logoutParams: {
      returnTo: window.location.origin,
    },
  };
  await auth0Client.logout(logoutOptions);
  user.set({});
  isAuthenticated.set(false);
}

async function updateAuthStore(): Promise<void> {
  const authenticated = await auth0Client.isAuthenticated();
  isAuthenticated.set(authenticated);

  if (authenticated) {
    const userData = await auth0Client.getUser();
    user.set(userData as User);
    localStorage.setItem("isLoggedIn", "true");
  } else {
    user.set({});
    localStorage.removeItem("isLoggedIn");
  }
}

async function checkAuth(): Promise<boolean> {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn) {
    await updateAuthStore();
  }
  return isLoggedIn;
}

const auth = {
  createClient,
  loginWithPopup,
  logout,
  updateAuthStore,
  checkAuth,
};

export default auth;

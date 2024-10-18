import { Auth0Client } from "@auth0/auth0-spa-js";
import { user, isAuthenticated, popupOpen } from "../store";
import config from "./auth_config";

async function createClient() {
  const auth0Client = new Auth0Client({
    domain: config.domain,
    clientId: config.clientId,
  });

  return auth0Client;
}

async function loginWithPopup(client: Auth0Client, options?: any) {
  popupOpen.set(true);
  try {
    await client.loginWithPopup(options);

    const currentUser = await client.getUser();
    if (currentUser) {
      user.set(currentUser);
      isAuthenticated.set(true);
    } else {
      isAuthenticated.set(false);
    }
  } catch (e) {
    console.error(e);
    isAuthenticated.set(false);
  } finally {
    popupOpen.set(false);
  }
}

function logout(client: Auth0Client) {
  return client.logout();
}

const auth = {
  createClient,
  loginWithPopup,
  logout,
};

export default auth;

import userStore from "../store/userStore";
import Login from "../commands/Login";
import { hooks } from "@poc/core/app";

export function initAuth(): Promise<string | null> {
  return new Promise((resolve) => {
    gapi.load('auth2', () => {
      gapi.auth2
        .init({
          client_id: `${import.meta.env.BO_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`,
          scope: 'profile email',
        })
        .then((auth2) => {
          const googleUser = auth2.currentUser.get();
          if (googleUser.isSignedIn()) {
            const token = googleUser.getAuthResponse().id_token;
            userStore.setToken(token)
            userStore.setUser({
              name: googleUser.getBasicProfile().getName(),
              email: googleUser.getBasicProfile().getEmail(),
            })
            new Login(token).execute().then(() => {
              hooks.callHook('app:signed-in', token);
              resolve(token);
            });
          } else {
            hooks.callHook('app:signed-out')
            userStore.clear();
            resolve(null)
          }
        })
        .catch(() => {
          hooks.callHook('app:signed-out')
          userStore.clear();
          resolve(null)
        });
    });
  })
}
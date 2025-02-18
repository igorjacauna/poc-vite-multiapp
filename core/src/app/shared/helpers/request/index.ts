import { FetchOptions, ofetch } from "ofetch";

export function getToken() {
  return gapi.auth2
    .init({
      client_id: `${import.meta.env.BO_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`,
      scope: 'profile email',
    })
    .then((auth2) => {
      const googleUser = auth2.currentUser.get();

      if (googleUser.isSignedIn()) {
        return googleUser.getAuthResponse().id_token;
      }
      return null;
    });
}

export async function getClientRequest() {
  const token = await getToken();
  return ofetch.create({
    retry: 3,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}

export default async function request<T>(url: string, options?: FetchOptions) {
  const client = await getClientRequest();
  return client<T>(url, { ...options, responseType: "json" });
}
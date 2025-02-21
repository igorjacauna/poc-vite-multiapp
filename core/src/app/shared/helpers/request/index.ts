import { FetchOptions, ofetch } from "ofetch";
import { rootStore } from "../../store";

export function getToken() {
  const userStore = rootStore.getStore<{
    token: string;
  }>('User');
  return userStore;
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

async function request<T>(url: string, options?: FetchOptions) {
  const client = await getClientRequest();
  return client<T>(url, { ...options, responseType: "json" });
}

export default {
  get: <T>(url: string, options?: FetchOptions) => request<T>(url, { ...options, method: "GET" }),
  post: <T>(url: string, options?: FetchOptions) => request<T>(url, { ...options, method: "POST" }),
  put: <T>(url: string, options?: FetchOptions) => request<T>(url, { ...options, method: "PUT" }),
  delete: <T>(url: string, options?: FetchOptions) => request<T>(url, { ...options, method: "DELETE" }),
  patch: <T>(url: string, options?: FetchOptions) => request<T>(url, { ...options, method: "PATCH" }),
}
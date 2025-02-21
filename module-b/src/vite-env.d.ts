/// <reference types="vite/client" />
/// <reference types="@poc/core/app" />
declare module "*.svg" {
  const content: string;
  export default content;
}
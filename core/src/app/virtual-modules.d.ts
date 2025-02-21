declare module 'virtual:modules' {
  import type { RouteObject } from "react-router";
  type MenuEntry = {
    label: string;
    icon?: string;
    route: string;
  };
  
  type MenuEntryFn = () => MenuEntry[];
  type RoutesFn = () => RouteObject[];
  
  const getRoutes: RoutesFn;
  const getFlags: () => string[];
  const getMenuEntries: MenuEntryFn;
  const boot: () => Promise<void>;
  export { getRoutes, getFlags, getMenuEntries, boot, hooks }
}
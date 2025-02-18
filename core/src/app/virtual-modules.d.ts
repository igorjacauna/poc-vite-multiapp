
declare module 'virtual:modules' {
  import { Hookable } from "hookable";
  import type { RouteObject } from "react-router";
  import type { Hooks } from './types';
  type MenuEntry = {
    label: string;
    icon?: string;
    route: string;
  };
  
  type MenuEntryFn = () => Promise<MenuEntry[]>;
  type RoutesFn = () => Promise<RouteObject[]>;
  
  const getRoutes: RoutesFn;
  const getFlags: () => string[];
  const getMenuEntries: MenuEntryFn;
  const boot: (appInit: () => Promise<void>, hooks: Hookable<Hooks, string>) => Promise<void>;
  export { getRoutes, getFlags, getMenuEntries, boot, hooks }
}
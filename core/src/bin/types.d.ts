import type { RouteObject } from "react-router";

export type MenuEntry = {
  label: string;
  icon?: string;
  route: string;
};

export type ModuleConfig = {
  moduleName: string;
  menuEntries?: () => (MenuEntry[] | Promise<MenuEntry[]>);
  flags?: string[];
  routes?: () => (RouteObject[] | Promise<RouteObject[]>);
  dependencies?: string[];
  hooks?: Partial<Hooks>;
};
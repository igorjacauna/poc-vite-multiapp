  import type { RouteObject } from "react-router";

  export type MenuEntry = {
    label: string;
    icon?: string;
    route: string;
  };

  export type MenuEntryFn = () => MenuEntry[] | (() => Promise<MenuEntry[]>);

  export type RoutesFn = () => RouteObject[] | (() => Promise<RouteObject[]>);

  export type ModuleConfig = {
    moduleName: string;
    menuEntries?: MenuEntryFn;
    flags?: string[];
    routes?: RoutesFn;
    dependencies?: string[];
    hooks?: Partial<Hooks>;
  };
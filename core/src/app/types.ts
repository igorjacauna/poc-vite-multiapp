export type FeatureFlag = {
  [flag: string]: boolean;
};

export type Hooks = {
  'cli:boot': () => void;
  'app:init': () => void;
  'app:beforeRender': () => void;
  'app:beforeMount': () => void;
  'app:beforeGetRoutes': () => void;
}
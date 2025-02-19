type FeatureFlag = {
  [flag: string]: boolean;
};

type Hooks = {
  'cli:boot': () => void;
  'app:init': () => void;
  'app:beforeRender': () => void;
  'app:afterRender': () => void;
  'app:beforeMount': () => void;
  'app:beforeGetRoutes': () => void;
}
import { GetFeatureFlags } from '@poc/core/app';
import { makeAutoObservable } from 'mobx';
import { getFlags } from 'virtual:modules';

export class ModuleBStore {
  featureFlags: { [flag: string]: boolean } = {};

  constructor() {
    makeAutoObservable(this)
  }

  fetchFeatureFlags() {
    return new GetFeatureFlags(getFlags()).execute().then(flags => {
      this.featureFlags = flags.reduce((acc, flag) => {
        return { ...acc, [flag.flag]: flag.isActive };
      }, {});
    });
  }
}

const moduleAStore = new ModuleBStore();

export default moduleAStore;
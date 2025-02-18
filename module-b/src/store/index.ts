import { makeAutoObservable } from 'mobx';

export class ModuleBStore {
  secondsPassed = 0

  constructor() {
    makeAutoObservable(this)
  }

  increaseTimer() {
    this.secondsPassed += 1
  }
}

export default new ModuleBStore();
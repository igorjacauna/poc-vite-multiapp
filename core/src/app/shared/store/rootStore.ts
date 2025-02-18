export class RootStore {
  private stores: Record<string, unknown> = {};

  registerStore<T>(key: string, store: T): void {
    if (this.stores[key]) {
      console.warn(`A store com a key "${key}" já está registrada.`);
    }
    this.stores[key] = store;
  }

  getStore<T>(key: string): T {
    const store = this.stores[key];
    if (!store) {
      throw new Error(`Store com a key "${key}" não encontrada.`);
    }
    return store as T;
  }
}

export const rootStore = new RootStore();

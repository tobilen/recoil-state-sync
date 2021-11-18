class BackboneStore {
  state: string = "some state";
  changeCallbacks: ((newState: string) => void)[] = [];

  get() {
    return this.state;
  }

  set(newState: string) {
    this.state = newState;
    this.changeCallbacks.map((cb) => cb(newState));
  }

  onChange(changeCallback: (newState: string) => void) {
    this.changeCallbacks = [...this.changeCallbacks, changeCallback];
  }
}

export const backboneStore = new BackboneStore();

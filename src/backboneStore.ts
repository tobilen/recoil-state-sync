class BackboneStore {
  state: string = "some state";
  changeCallback: (newState: string) => void = () => {};

  get() {
    return this.state;
  }

  set(newState: string) {
    this.state = newState;
    this.changeCallback(newState);
  }

  onChange(changeCallback: (newState: string) => void) {
    this.changeCallback = changeCallback;
  }
}

export const backboneStore = new BackboneStore();

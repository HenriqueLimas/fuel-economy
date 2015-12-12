export default class Store {
  constructor() {
    this._listeners = new Map();
  }

  change() {
    this._listeners.forEach((listener) => listener());
  }

  onChange(callback) {
    let listener = Symbol();

    this._listeners.set(listener, callback);

    return listener;
  }

  unregisterChange(listener) {
    return this._listeners.delete(listener);
  }
}
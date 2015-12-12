export default class Dispatcher {
  constructor() {
    this._listeners = new Map();
    this._onChangeListeners = new Map();
  }

  dispatch(obj) {
    this._listeners.forEach((listener) => listener(obj));
  }

  register(callback) {
    let listener = Symbol();

    this._listeners.set(listener, callback);

    return listener;
  }

  change() {
    this._onChangeListeners.forEach((listener) => listener());
  }

  onChange(callback) {
    let listener = Symbol();

    this._onChangeListeners.set(listener, callback);

    return listener;
  }

  unregisterChange(listener) {
    return this._onChangeListeners.delete(listener);
  }

  unregister(listener) {
    return this._listeners.delete(listener);
  }
}
export default class Dispatcher {
  constructor() {
    this._listeners = new Map();
  }

  dispatch(obj) {
    this._listeners.forEach((listener) => listener(obj));
  }

  register(callback) {
    let listener = Symbol();

    this._listeners.set(listener, callback);

    return listener;
  }

  unregister(listener) {
    return this._listeners.delete(listener);
  }
}
export function defineConstProperty(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    enumerable: true,
    writable: false,
    configurable: false,
    value: value
  });
}
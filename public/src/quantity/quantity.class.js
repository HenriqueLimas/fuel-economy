export default class Quantity {
  constructor({unit='L', value=0}) {
    this.unit = unit;
    this.value = value;
  }

  setValue(value) {
    this.value = parseInt(value);
  }
}
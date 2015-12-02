export default class Distance {
  constructor({unit='Km', value=0}) {
    this.unit = unit;
    this.value = value;
  }

  setValue(value) {
    this.value = parseInt(value);
  }
}
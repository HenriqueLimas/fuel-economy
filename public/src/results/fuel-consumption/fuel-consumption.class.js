export default class FuelConsumptions {
  static calc({quantity={}, distance={}}) {
    var result = {
      value: 0,
      unit: `${distance.unit}/${quantity.unit}`
    };

    if (!quantity.value || !distance.value) {
      return result;
    }

    result.value = distance.value / quantity.value;

    result.value = result.value.toString().substring(0, 10);
    return result;
  }
}
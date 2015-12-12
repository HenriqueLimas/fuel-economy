import quantityDispatcher from './quantity.dispatcher.js';
import {defineConstProperty} from '../tools/utils.js';

export default class QuantityActions {
  static changeValue(value) {
    quantityDispatcher.dispatch({
      type: QuantityActions.VALUE_CHANGED,
      data: value
    });
  }

  static changeUnit(unit) {
    quantityDispatcher.dispatch({
      type: QuantityActions.UNIT_CHANGED,
      data: unit
    });
  }
}

defineConstProperty(QuantityActions, 'VALUE_CHANGED', Symbol());
defineConstProperty(QuantityActions, 'UNIT_CHANGED', Symbol());


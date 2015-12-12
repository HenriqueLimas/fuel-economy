import distanceDispatcher from './distance.dispatcher.js';
import {defineConstProperty} from '../tools/utils.js';

export default class DistanceActions {
  static changeValue(value) {
    distanceDispatcher.dispatch({
      type: DistanceActions.VALUE_CHANGED,
      data: value
    });
  }

  static changeUnit(unit) {
    distanceDispatcher.dispatch({
      type: DistanceActions.UNIT_CHANGED,
      data: unit
    });
  }
}

defineConstProperty(DistanceActions, 'VALUE_CHANGED', Symbol());
defineConstProperty(DistanceActions, 'UNIT_CHANGED', Symbol());


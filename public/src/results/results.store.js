import Store from '../tools/store.js';

import Quantity from '../quantity/quantity.class.js';
import QuantityActions from '../quantity/quantity.actions.js';
import quantityDispatcher from '../quantity/quantity.dispatcher.js';

import Distance from '../distance/distance.class.js';
import DistanceActions from '../distance/distance.actions.js';
import distanceDispatcher from '../distance/distance.dispatcher.js';

import ResultsActions from './results.actions.js';

export default class ResultsStore extends Store {
  constructor() {
    super();

    this.quantity = new Quantity({});
    this.distance = new Distance({});

    quantityDispatcher.register((listener) => {
      this._updateQuantityClass(listener);

      this.updateResults();
    });

    distanceDispatcher.register((listener) => {
      this._updateDistanceClass(listener);

      this.updateResults();
    });
  }

  _updateQuantityClass(listener) {
    switch(listener.type) {
      case QuantityActions.VALUE_CHANGED:
        this.quantity = new Quantity({
          unit: this.quantity.unit, 
          value: listener.data
        });

        console.log('VALUE_CHANGED', this.quantity);
        break;

      case QuantityActions.UNIT_CHANGED:
        this.quantity = new Quantity({
          value: this.quantity.value,
          unit: listener.data
        });

        console.log('UNIT_CHANGED', this.quantity);
        break;
    }

    this.change();
  }

  _updateDistanceClass(listener) {
    switch(listener.type) {
      case DistanceActions.VALUE_CHANGED:
        this.distance = new Distance({
          unit: this.distance.unit, 
          value: listener.data
        });

        console.log('VALUE_CHANGED', this.distance);
        break;

      case DistanceActions.UNIT_CHANGED:
        this.distance = new Distance({
          value: this.distance.value,
          unit: listener.data
        });

        console.log('UNIT_CHANGED', this.distance);
        break;
    }

    this.change();
  }

  updateResults() {
    ResultsActions.changeResult({
      quantity: this.quantity,
      distance: this.distance
    });
  }
}
import Store from '../tools/store.js';

import Quantity from './quantity.class.js';
import QuantityActions from './quantity.actions.js';
import quantityDispatcher from './quantity.dispatcher.js';

export default class QuantityStore extends Store {
  constructor() {
    super();

    this.quantity = new Quantity({});

    this.listener = quantityDispatcher.register((listener) => {
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
    });
  }

  unregisterListener() {
    quantityDispatcher.unregister(this.listener);
  }
}
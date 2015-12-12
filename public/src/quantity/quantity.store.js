import Quantity from './quantity.class.js';
import QuantityActions from './quantity.actions.js';
import quantityDispatcher from './quantity.dispatcher.js';

export default class QuantityStore {
  constructor() {
    this.quantity = new Quantity({});

    quantityDispatcher.register((listener) => {
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

      quantityDispatcher.change();
    });
  }
}
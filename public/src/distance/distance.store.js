import Store from '../tools/store.js';

import Distance from './distance.class.js';
import DistanceActions from './distance.actions.js';
import distanceDispatcher from './distance.dispatcher.js';

export default class DistanceStore extends Store{
  constructor() {
    super();

    this.distance = new Distance({});

    this.listener = distanceDispatcher.register((listener) => {
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
    });
  }

  unregisterListener() {
    distanceDispatcher.unregister(this.listener);
  }
}
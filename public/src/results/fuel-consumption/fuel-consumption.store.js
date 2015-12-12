import Store from '../../tools/store.js';

import ResultsConsumptionsActions from '../results.actions.js';
import resultDispatcher from '../results.dispatcher.js';

import FuelConsumptions from './fuel-consumption.class.js';

export default class FuelConsumptionStore extends Store {
  constructor() {
    super();

    this.results = FuelConsumptions.calc({});

    resultDispatcher.register((listener) => {
      switch(listener.type) {
        case ResultsConsumptionsActions.RESULT_CHANGED:
          this.results = FuelConsumptions.calc(listener.data);
          this.change(this.results);

          console.log('RESULT_CHANGED', this.results);
          break;
      }
    });
  }
}
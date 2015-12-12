import ResultsConsumptionsActions from '../results.actions.js';
import resultDispatcher from '../results.dispatcher.js';

import FuelConsumptions from './fuel-consumption.class.js';
import fuelConsumptionsDispatcher from './fuel-consumption.dispatcher.js';

export default class FuelConsumptionStore {
  constructor() {
    this.results = FuelConsumptions.calc({});

    resultDispatcher.register((listener) => {
      switch(listener.type) {
        case ResultsConsumptionsActions.RESULT_CHANGED:
          this.results = FuelConsumptions.calc(listener.data);
          fuelConsumptionsDispatcher.change(this.results);

          console.log('RESULT_CHANGED', this.results);
          break;
      }
    });
  }
}
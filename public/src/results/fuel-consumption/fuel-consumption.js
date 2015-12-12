import djs from 'dom.js';

import FuelConsumptionStore from './fuel-consumption.store.js';
import fuelConsumptionDispatcher from './fuel-consumption.dispatcher.js';

let configMap = {
  html: djs`
    <div class="fe-fuel-consumption">
      <span class="fe-js-value">88</span> <span class="fe-unit">Km/L</span>
    </div>
  `
};

let elementMap = {
  $container: null,
  $fuelConsumption: null,
  $fuelUnit: null,
  $fuelValue: null
};

let fuelConsumptionStore;

export function initModule($container) {
  elementMap.$fuelConsumption = $container.create(configMap.html);
  setElementMap($container);

  fuelConsumptionStore = new FuelConsumptionStore();

  fuelConsumptionDispatcher.onChange(function() {
    refreshFuelConsumption(fuelConsumptionStore.results);
  });

  fuelConsumptionDispatcher.change();
}

function refreshFuelConsumption(results) {
  elementMap.$fuelUnit.innerHTML = results.unit;
  elementMap.$fuelValue.innerHTML = results.value;
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$fuelUnit = elementMap.$fuelConsumption.find('.fe-unit');
  elementMap.$fuelValue = elementMap.$fuelConsumption.find('.fe-js-value');
}
import djs from 'dom.js';
import FuelConsumption from './fuel-consumption.class.js';

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

export function initModule($container) {
  elementMap.$fuelConsumption = $container.create(configMap.html);
  setElementMap($container);

  refreshFuelConsumption({});
}

export function refreshFuelConsumption({quantity, distance}) {
  var result = FuelConsumption.calc({quantity, distance});

  elementMap.$fuelUnit.innerHTML = result.unit;
  elementMap.$fuelValue.innerHTML = result.value;
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$fuelUnit = elementMap.$fuelConsumption.find('.fe-unit');
  elementMap.$fuelValue = elementMap.$fuelConsumption.find('.fe-js-value');
}
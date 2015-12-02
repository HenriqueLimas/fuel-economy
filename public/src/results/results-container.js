import djs from 'dom.js';
import * as fuelComsuption from './fuel-consumption/fuel-consumption.js';

let configMap = {
  html: djs`
    <div class="fe-results-container">
      <div class="fe-js-fuel-consumption" style="height:100%"></div>
    </div>
  `
};

let elementMap = {
  $container: null,
  $resultsContainer: null,
  $fuelComsuption: null
};

export function initModule($container) {
  elementMap.$resultsContainer = $container.create(configMap.html);
  setElementMap($container);

  fuelComsuption.initModule(elementMap.$fuelComsuption);
}

export function refreshFuelConsumption({distance, quantity}) {
  fuelComsuption.refreshFuelConsumption({distance, quantity});
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$fuelComsuption = elementMap.$resultsContainer.find('.fe-js-fuel-consumption');
}
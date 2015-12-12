import djs from 'dom.js';
import * as fuelComsuption from './fuel-consumption/fuel-consumption.js';
import ResultsStore from './results.store.js';

let resultsStore;

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

  resultsStore = new ResultsStore();
  
  fuelComsuption.initModule(elementMap.$fuelComsuption);

  resultsStore.updateResults();
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$fuelComsuption = elementMap.$resultsContainer.find('.fe-js-fuel-consumption');
}
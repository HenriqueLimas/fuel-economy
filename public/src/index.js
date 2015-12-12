import djs from 'dom.js';

import * as header from './header/header.js';
import * as inputsContainer from './inputs/inputs-container.js';
import * as resultsContainer from './results/results-container.js';

import * as quantity from './quantity/quantity.js';
import * as distance from './distance/distance.js';
import * as results from './results/results-container.js';

let $headerContainer = djs('.fe-js-header');
let $inputsContainer = djs('.fe-js-inputs-container');
let $resultsContainer = djs('.fe-js-results-container');

let quantityModel = {unit: 'L'};
let distanceModel = {unit: 'Km'};

quantity.config({
  unit: 'L',
  onInput: function(model) {
    quantityModel = model;
    results.refreshFuelConsumption({
      distance: distanceModel,
      quantity: quantityModel
    });
  }
});

distance.config({
  unit: 'Km',
  onInput: function(model) {
    distanceModel = model;
    results.refreshFuelConsumption({
      distance: distanceModel,
      quantity: quantityModel
    });
  }
});

header.initModule($headerContainer);
inputsContainer.initModule($inputsContainer);
resultsContainer.initModule($resultsContainer);

results.refreshFuelConsumption({
  distance: distanceModel,
  quantity: quantityModel
});

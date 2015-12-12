import djs from 'dom.js';

import DistanceActions from './distance.actions.js';
import DistanceStore from './distance.store.js';

let configMap = {
  html: djs`
    <div class="fe-distance">
      <input class="fe-inputs__input fe-distance__input" type="number">
      <span class="fe-unit fe-distance__unit">{$$unit}</span>
    </div>
  `
};

let elementMap = {
  $container: null,
  $distance: null,
  $input: null,
  $unit: null
};

let distanceStore;

export function initModule($container) {
  elementMap.$distance = $container.create(configMap.html);
  setElementMap($container);
  setElementHandlers();

  distanceStore = new DistanceStore();
  distanceStore.onChange(function() {
    refreshUnit(distanceStore.distance.unit);
  });

  DistanceActions.changeUnit('Km');
  distanceStore.unregisterListener();
}

function refreshUnit(unit) {
  elementMap.$unit.innerHTML = unit;
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$input = elementMap.$distance.find('.fe-distance__input');
  elementMap.$unit = elementMap.$distance.find('.fe-distance__unit');
}

function setElementHandlers() {
  elementMap.$input.addEventListener('input', function(event) {
    DistanceActions.changeValue(event.target.value);    
  });
}

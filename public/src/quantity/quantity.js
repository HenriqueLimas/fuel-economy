import djs from 'dom.js';

import QuantityActions from './quantity.actions.js';
import QuantityStore from './quantity.store.js';

let configMap = {
  html: djs`
    <div class="fe-quantity">
      <input class="fe-inputs__input fe-quantity__input" type="number">
      <span class="fe-unit fe-quantity__unit">{$$unit}</span>
    </div>
  `
};

let elementMap = {
  $container: null,
  $quantity: null,
  $input: null,
  $unit: null
};

let quantityStore;

export function initModule($container) {
  elementMap.$quantity = $container.create(configMap.html);
  setElementMap($container);
  setElementHandlers();

  quantityStore = new QuantityStore();
  quantityStore.onChange(function() {
    refreshUnit(quantityStore.quantity.unit);
  });

  QuantityActions.changeUnit('L');
  quantityStore.unregisterListener();
}

function refreshUnit(unit) {
  elementMap.$unit.innerHTML = unit;
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$input = elementMap.$quantity.find('.fe-quantity__input');
  elementMap.$unit = elementMap.$quantity.find('.fe-quantity__unit');
}

function setElementHandlers() {
  elementMap.$input.addEventListener('input', function(event) {
    QuantityActions.changeValue(event.target.value);    
  });
}
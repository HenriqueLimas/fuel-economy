import djs from 'dom.js';

let configMap = {
  html: djs`
    <div class="fe-quantity">
      <input class="fe-inputs__input fe-quantity__input" type="text">
      <span class="fe-unit fe-quantity__unit">L</span>
    </div>
  `
};

let elementMap = {
  $container: null,
  $quantity: null,
  $input: null,
  $unit: null
};

export function initModule($container) {
  elementMap.$quantity = $container.create(configMap.html);
  setElementMap($container);
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$input = elementMap.$quantity.find('.fe-quantity__input');
  elementMap.$unit = elementMap.$quantity.find('.fe-quantity__unit');
}
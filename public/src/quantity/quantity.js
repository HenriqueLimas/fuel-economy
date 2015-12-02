import djs from 'dom.js';
import Quantity from './quantity.class.js';

let configMap = {
  html: djs`
    <div class="fe-quantity">
      <input class="fe-inputs__input fe-quantity__input" type="text">
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

let elementHandlers = {
  onInput: null
};

let quantityModel = null;

export function initModule($container) {
  elementMap.$quantity = $container.create(configMap.html);
  setElementMap($container);
}

export function config({unit, onInput}) {
  quantityModel = new Quantity({unit});
  elementHandlers.onInput = onInput;

  configMap.html = configMap.html.replace('{$$unit}', quantityModel.unit);
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$input = elementMap.$quantity.find('.fe-quantity__input');
  elementMap.$unit = elementMap.$quantity.find('.fe-quantity__unit');

  elementMap.$input.addEventListener('input', function(event) {
    quantityModel.setValue(event.target.value);

    if (elementHandlers.onInput) {
      elementHandlers.onInput(event);
    }
  });
}
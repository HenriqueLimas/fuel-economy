import djs from 'dom.js';
import * as quantity from '../quantity/quantity.js';
import * as distance from '../distance/distance.js';

let configMap = {
  html: djs `
    <div class="fe-inputs-container">
      <div class="fe-inputs fe-js-quantity"></div>

      <div class="fe-inputs fe-js-distance"></div>
    </div>
  `
};

let elementMap = {
  $container: null,
  $inputContainer: null,
  $inputQuantity: null,
  $inputDistance: null
};

export function initModule($container) {
  elementMap.$inputContainer = $container.create(configMap.html);

  setElementMap($container);

  quantity.config({
    unit: 'L',
    onInput: function(e) {

    }
  });
  quantity.initModule(elementMap.$inputQuantity);

  distance.initModule(elementMap.$inputDistance);
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$inputQuantity = elementMap.$inputContainer.find('.fe-js-quantity');
  elementMap.$inputDistance = elementMap.$inputContainer.find('.fe-js-distance');
}

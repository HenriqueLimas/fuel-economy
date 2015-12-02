import djs from 'dom.js';
import Distance from './distance.class.js';

let configMap = {
  html: djs`
    <div class="fe-distance">
      <input class="fe-inputs__input fe-distance__input" type="text">
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

let elementHandlers = {
  onInput: null
};

let distanceModel = null;

export function initModule($container) {
  elementMap.$distance = $container.create(configMap.html);
  setElementMap($container);
}

export function config({unit, onInput}) {
  distanceModel = new Distance({unit});
  elementHandlers.onInput = onInput;
  
  configMap.html = configMap.html.replace('{$$unit}', distanceModel.unit);
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$input = elementMap.$distance.find('.fe-distance__input');
  elementMap.$unit = elementMap.$distance.find('.fe-distance__unit');

  elementMap.$input.addEventListener('input', function(event) {
    distanceModel.setValue(event.target.value);

    if (elementHandlers.onInput) {
      elementHandlers.onInput(distanceModel);
    }
  });
}
import djs from 'dom.js';

let configMap = {
  html: djs`
    <div class="fe-distance">
      <input class="fe-inputs__input fe-distance__input" type="text">
      <span class="fe-unit fe-distance__unit">Km</span>
    </div>
  `
};

let elementMap = {
  $container: null,
  $distance: null,
  $input: null,
  $unit: null
};

export function initModule($container) {
  elementMap.$distance = $container.create(configMap.html);
  setElementMap($container);
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$input = elementMap.$distance.find('.fe-distance__input');
  elementMap.$unit = elementMap.$distance.find('.fe-distance__unit');
}
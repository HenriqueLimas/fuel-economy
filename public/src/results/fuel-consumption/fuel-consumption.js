import djs from 'dom.js';

let configMap = {
  html: djs`
    <div class="fe-fuel-consumption">
      88 <span class="fe-unit">Km/L</span>
    </div>
  `
};

let elementMap = {
  $container: null,
  $fuelConsumption: null
};

export function initModule($container) {
  elementMap.$fuelConsumption = $container.create(configMap.html);

  setElementMap($container);
}

function setElementMap($container) {
  elementMap.$container = $container;
}
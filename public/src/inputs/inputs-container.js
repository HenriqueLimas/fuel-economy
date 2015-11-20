import djs from 'dom.js';

let configMap = {
  html: djs`
    <div class="fe-inputs-container">
      <div class="fe-inputs fe-js-quantity">
        <div class="fe-quantity">
          <input class="fe-inputs__input fe-quantity__input" type="text">
          <span class="fe-unit fe-unit__quantity">L</span>
        </div>
      </div>

      <div class="fe-inputs fe-js-distance">
        <div class="fe-distance">
          <input class="fe-inputs__input fe-distance__input" type="text">
          <span class="fe-unit fe-unit__distance">Km</span>
        </div>
      </div>
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
}

function setElementMap($container) {
  elementMap.$container = $container;
  elementMap.$inputQuantity = elementMap.$inputContainer.find('.fe-js-quantity');
  elementMap.$inputDistance = elementMap.$inputContainer.find('.fe-js-distance');
}
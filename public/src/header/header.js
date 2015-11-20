import djs from 'dom.js';

let configMap = {
  html: djs`
    <header class="fe-header">
      <h1>Fuel Economy</h1>
    </header>
  `
};

export function initModule($container) {
   $container.create(configMap.html);
}

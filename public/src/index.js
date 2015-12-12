import djs from 'dom.js';

import * as header from './header/header.js';
import * as inputsContainer from './inputs/inputs-container.js';
import * as resultsContainer from './results/results-container.js';

let $headerContainer = djs('.fe-js-header');
let $inputsContainer = djs('.fe-js-inputs-container');
let $resultsContainer = djs('.fe-js-results-container');

header.initModule($headerContainer);
inputsContainer.initModule($inputsContainer);
resultsContainer.initModule($resultsContainer);

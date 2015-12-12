import resultsDispatcher from './results.dispatcher.js';
import {defineConstProperty} from '../tools/utils.js';

export default class ResultsActions {
  static changeResult(value) {
    resultsDispatcher.dispatch({
      type: ResultsActions.RESULT_CHANGED,
      data: value
    });
  }
}

defineConstProperty(ResultsActions, 'RESULT_CHANGED', Symbol());

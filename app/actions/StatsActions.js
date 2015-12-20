/* 
* @Author: forecho
* @Date:   2015-12-20 21:06:02
* @Last Modified by:   forecho
* @Last Modified time: 2015-12-20 21:06:41
*/

import alt from '../alt';

class StatsActions {
  constructor() {
    this.generateActions(
      'getStatsSuccess',
      'getStatsFail'
    );
  }

  getStats() {
    $.ajax({ url: '/api/stats' })
      .done((data) => {
        this.actions.getStatsSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getStatsFail(jqXhr);
      });
  }
}

export default alt.createActions(StatsActions);
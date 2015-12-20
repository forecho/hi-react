/* 
* @Author: forecho
* @Date:   2015-12-20 21:06:58
* @Last Modified by:   forecho
* @Last Modified time: 2015-12-20 21:07:13
*/

import {assign} from 'underscore';
import alt from '../alt';
import StatsActions from '../actions/StatsActions';

class StatsStore {
  constructor() {
    this.bindActions(StatsActions);
    this.leadingRace = { race: 'Unknown', count: 0 };
    this.leadingBloodline = { bloodline: 'Unknown', count: 0 };
    this.amarrCount = 0;
    this.caldariCount = 0;
    this.gallenteCount = 0;
    this.minmatarCount = 0;
    this.totalVotes = 0;
    this.femaleCount = 0;
    this.maleCount = 0;
    this.totalCount = 0;
  }

  onGetStatsSuccess(data) {
    assign(this, data);
  }

  onGetStatsFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(StatsStore);
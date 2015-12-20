/* 
* @Author: forecho
* @Date:   2015-12-20 18:12:26
* @Last Modified by:   forecho
* @Last Modified time: 2015-12-20 18:12:40
*/

import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.characters = [];
  }

  onGetTwoCharactersSuccess(data) {
    this.characters = data;
  }

  onGetTwoCharactersFail(errorMessage) {
    toastr.error(errorMessage);
  }

  onVoteFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(HomeStore);
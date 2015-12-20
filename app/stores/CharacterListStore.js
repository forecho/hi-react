/* 
* @Author: forecho
* @Date:   2015-12-20 20:47:27
* @Last Modified by:   forecho
* @Last Modified time: 2015-12-20 20:47:42
*/

import alt from '../alt';
import CharacterListActions from '../actions/CharacterListActions';

class CharacterListStore {
  constructor() {
    this.bindActions(CharacterListActions);
    this.characters = [];
  }

  onGetCharactersSuccess(data) {
    this.characters = data;
  }

  onGetCharactersFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(CharacterListStore);
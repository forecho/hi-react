/* 
* @Author: forecho
* @Date:   2015-12-20 20:42:57
* @Last Modified by:   forecho
* @Last Modified time: 2015-12-20 20:43:34
*/

import alt from '../alt';

class CharacterListActions {
  constructor() {
    this.generateActions(
      'getCharactersSuccess',
      'getCharactersFail'
    );
  }

  getCharacters(payload) {
    let url = '/api/characters/top';
    let params = {
      race: payload.race,
      bloodline: payload.bloodline
    };

    if (payload.category === 'female') {
      params.gender = 'female';
    } else if (payload.category === 'male') {
      params.gender = 'male';
    }

    if (payload.category === 'shame') {
      url = '/api/characters/shame';
    }

    $.ajax({ url: url, data: params })
      .done((data) => {
        this.actions.getCharactersSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getCharactersFail(jqXhr);
      });
  }
}

export default alt.createActions(CharacterListActions);
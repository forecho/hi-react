/* 
* @Author: forecho
* @Date:   2015-12-20 18:19:42
* @Last Modified by:   forecho
* @Last Modified time: 2015-12-20 18:19:53
*/

import alt from '../alt';

class CharacterActions {
  constructor() {
    this.generateActions(
      'reportSuccess',
      'reportFail',
      'getCharacterSuccess',
      'getCharacterFail'
    );
  }

  getCharacter(characterId) {
    $.ajax({ url: '/api/characters/' + characterId })
      .done((data) => {
        this.actions.getCharacterSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getCharacterFail(jqXhr);
      });
  }

  report(characterId) {
    $.ajax({
      type: 'POST',
      url: '/api/report',
      data: { characterId: characterId }
    })
      .done(() => {
        this.actions.reportSuccess();
      })
      .fail((jqXhr) => {
        this.actions.reportFail(jqXhr);
      });
  }
}

export default alt.createActions(CharacterActions);
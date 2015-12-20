/* 
* @Author: forecho
* @Date:   2015-12-20 11:24:34
* @Last Modified by:   forecho
* @Last Modified time: 2015-12-20 11:25:03
*/

import alt from '../alt';

class FooterActions {
  constructor() {
    this.generateActions(
      'getTopCharactersSuccess',
      'getTopCharactersFail'
    );
  }

  getTopCharacters() {
    $.ajax({ url: '/api/characters/top' })
      .done((data) => {
        this.actions.getTopCharactersSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getTopCharactersFail(jqXhr)
      });
  }
}

export default alt.createActions(FooterActions);
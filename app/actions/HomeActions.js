/* 
* @Author: forecho
* @Date:   2015-12-20 18:11:41
* @Last Modified by:   forecho
* @Last Modified time: 2015-12-20 18:12:00
*/
import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getTwoCharactersSuccess',
      'getTwoCharactersFail',
      'voteFail'
    );
  }

  getTwoCharacters() {
    $.ajax({ url: '/api/characters' })
      .done(data => {
        this.actions.getTwoCharactersSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
      });
  }

  vote(winner, loser) {
    $.ajax({
      type: 'PUT',
      url: '/api/characters' ,
      data: { winner: winner, loser: loser }
    })
      .done(() => {
        this.actions.getTwoCharacters();
      })
      .fail((jqXhr) => {
        this.actions.voteFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(HomeActions);
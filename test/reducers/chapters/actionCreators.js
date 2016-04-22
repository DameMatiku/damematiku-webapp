import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { actionTypes, loadChapter, selectChapter } from '../../../src/reducers/chapters/actionCreators';

const chapter = {
  "id": 123,
  "title": "Some chapter",
  "description": "HTML description.",
  "videos": [
    {
      "id": 153,
      "title": "Some chapter",
      "author": {
        "id": 1325,
        "name": "Lord Voldemort",
        "reputation": 10000,
        "avatarUrl": "http://someurl.com/img.png"
      },
      "youtubeId": "13kbnrfv01",
      "votes": -3,
      "myVote": "up"
    }
  ],
  "sponsor": {
    "name": "Some company",
    "logoUrl": "http://someurl.com/logo.png",
    "link": "http://someurl.com"
  },
  "nextChapter": {
    "id": 124,
    "title": "Another chapter"
  },
  "previousChapter": {
    "id": 125,
    "title": "Some another chapter"
  }
};

describe('chapters loading action creators', () => {

  it('must select the given chapter as loaded', () => {
    expect(selectChapter(chapter)).to.eql({
      type: actionTypes.SELECT,
      chapter 
    });
  });

  it('must create correct API action', () => {
    const id = "bdcalksdj";
    expect(loadChapter(id)).to.eql(
      {
        [CALL_API]: {
          endpoint: `${API_BASE}/chapters/${id}`,
          method: 'GET',
          types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
        }
      }
    );
  });

});

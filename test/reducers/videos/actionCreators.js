import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { actionTypes, loadVideo, selectVideo } from '../../../src/reducers/videos/actionCreators';

const video = {
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
};

describe('videos loading action creators', () => {

  it('must select the given video as loaded', () => {
    expect(selectVideo(video)).to.eql({
      type: actionTypes.SELECT,
      video 
    });
  });

  it('must create correct API action', () => {
    const id = "bdcalksdj";
    expect(loadVideo(id)[CALL_API]).to.eql(
      {
        endpoint: `${API_BASE}/videos/${id}`,
        method: 'GET',
        types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
      }
    );
  });

});

import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { voteTypes } from '../../../src/reducers/voting/voting';
import { actionTypes, initVoting, upvote, downvote, resetVote } from '../../../src/reducers/voting/actionCreators';

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
const accessToken = "asldkjasldkjasdlkjasdlkjaslkdjaslkdjaskjfdhsdlkfjhalkfdjhakldsfjn";

describe('voting action creators', () => {

  it('must initialise voting information from video data', () => {
    expect(initVoting(video)).to.eql({
      type: actionTypes.INIT,
      videoId: 153, 
      hasVoted: true,
      vote: voteTypes.UP
    });
  });

  it('must create correct API action for upvoting', () => {
    const id = "bdcalksdj";
    expect(upvote(accessToken, id)[CALL_API]).to.eql(
      {
        endpoint: `${API_BASE}/videos/${id}/upvote`,
        method: 'POST',
        meta: { videoId: id, vote: voteTypes.UP },
        types: [ actionTypes.REQUEST, actionTypes.SUCCESS, { type: actionTypes.ERROR, meta: (action) => ({ videoId: action.videoId }) } ]
      }
    );
  });

  it('must create correct API action for downvoting', () => {
    const id = "bdcalksdj";
    expect(downvote(accessToken, id)[CALL_API]).to.eql(
      {
        endpoint: `${API_BASE}/videos/${id}/downvote`,
        method: 'POST',
        meta: { videoId: id, vote: voteTypes.DOWN },
        types: [ actionTypes.REQUEST, actionTypes.SUCCESS, { type: actionTypes.ERROR, meta: (action) => ({ videoId: action.videoId }) } ]
      }
    );
  });

  it('must create correct API action for voting reset', () => {
    const videoId = "bdcalksdj";
    const action = resetVote(accessToken, videoId);
    expect(action[CALL_API]).to.eql(
      {
        endpoint: `${API_BASE}/videos/${videoId}/resetVote`,
        method: 'POST',
        meta: { videoId, vote: voteTypes.NONE },
        types: [ actionTypes.REQUEST, actionTypes.SUCCESS, { type: actionTypes.ERROR, meta: (action) => ({ videoId: action.videoId }) } ]
      }
    );
  });

});

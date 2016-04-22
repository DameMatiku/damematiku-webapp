import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { voteTypes } from '../../../src/reducers/subscribtion/subscribtion';
import { actionTypes, initVoting, upvote, downvote, resetVote } from '../../../src/reducers/subscribtion/actionCreators';

describe('subscribtion action creators', () => {

  it('must initialise subscription information from video data', () => {
    expect(initVoting(video)).to.eql({
      type: actionTypes.INIT,
      videoId: 153, 
      hasVoted: true,
      vote: voteTypes.UP
    });
  });

  it('must create correct API action for upvoting', () => {
    const id = "bdcalksdj";
    expect(upvote(id)).to.eql(
      {
        [CALL_API]: {
          endpoint: `${API_BASE}/videos/${id}/upvote`,
          method: 'POST',
          meta: { videoId: id, vote: voteTypes.UP },
          types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
        }
      }
    );
  });

  it('must create correct API action for downvoting', () => {
    const id = "bdcalksdj";
    expect(downvote(id)).to.eql(
      {
        [CALL_API]: {
          endpoint: `${API_BASE}/videos/${id}/downvote`,
          method: 'POST',
          meta: { videoId: id, vote: voteTypes.DOWN },
          types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
        }
      }
    );
  });

  it('must create correct API action for voting reset', () => {
    const videoId = "bdcalksdj";
    expect(resetVote(videoId)).to.eql(
      {
        [CALL_API]: {
          endpoint: `${API_BASE}/videos/${videoId}/resetVote`,
          method: 'POST',
          meta: { videoId, vote: voteTypes.NONE },
          types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
        }
      }
    );
  });

});

import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { API_BASE } from '../../../src/cfg.js';
import { actionTypes, loadAuthor, selectAuthor } from '../../../src/reducers/authors/actionCreators';

const author = {
  "id": 1325,
  "name": "Lord Voldemort",
  "reputation": 10000,
  "avatarUrl": "http://someurl.com/img.png"
};

describe('authors loading action creators', () => {

  it('must select the given author as loaded', () => {
    expect(selectAuthor(author)).to.eql({
      type: actionTypes.SELECT,
      author 
    });
  });

  it('must create correct API action', () => {
    const id = 1325;
    expect(loadAuthor(id)).to.eql(
      {
        [CALL_API]: {
          endpoint: `${API_BASE}/authors/${id}`,
          method: 'GET',
          types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.ERROR ]
        }
      }
    );
  });

});

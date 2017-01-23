import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comments Reducer', ()=> {
    it('handles action with unknown type', ()=> {
        const result = commentReducer();
        expect(result).to.eql([]);
    });

    it('handles action of type SAVE_COMMENT', ()=> {
        const action = {type: SAVE_COMMENT, payload: "new comment"};
        const initialState = ['a', 'b', 'c'];
        expect(commentReducer(initialState, action)).to.eql(['new comment', 'a', 'b', 'c']);
    });
})
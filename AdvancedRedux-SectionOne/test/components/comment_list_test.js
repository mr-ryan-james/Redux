import {renderComponent, expect} from '../test_helper';

import CommentList from '../../src/components/comment_list';

describe("CommentList", ()=> {
    let component;

    beforeEach(()=> {
        const props = { comments: ['New Comment', 'Other New Comment']};
        component = renderComponent(CommentList, null, props);
    });

    it('shows an <li> for each comment', ()=> {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', ()=> {
        expect(component.find('li:first')).to.have.text('New Comment');
        expect(component.find('li:last')).to.have.text('Other New Comment');
    });
});
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import ListContainer from '../js/components/list-container';

describe('list container component', function() {
    it('renders the list container component', function(){
      const renderer = TestUtils.createRenderer();
      renderer.render(<ListContainer />)
      const result = renderer.getRenderOutput();
      result.props.title.should.equal('Test')
    })
})

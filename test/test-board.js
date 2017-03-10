import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';


describe('board component', function () {
  it('renders the board component', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Board />);
    const result = renderer.getRenderOutput();

  });
});

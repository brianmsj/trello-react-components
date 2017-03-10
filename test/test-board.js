import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';
import ListContainer from '../js/components/list-container';

describe('board component', function () {
  it('renders the list container', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render( <div>
          <h1>{props.title}</h1>
          <div className = 'board-list'>
          <ListContainer />
        </div>
        </div>)

  });
});

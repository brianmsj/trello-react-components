import React from 'react';
import ListContainer from './list-container';



export default function Board(props) {
  return (
    <div>
      <h1>props.title</h1>
      <div className = 'board-list'>
      <ListContainer />
    </div>
    </div>
  );
}

import React from 'react';
import List from './list';

export default function Board(props) {
  return (
    <div>
    <h1>{props.title}</h1>
     <div className = 'board-list'>
      < List title = {props.listTitles[0]} onAddInputChanged = {function(){console.log("hello")}} onAddSubmit = {function(){console.log("hi laura")}} cardText = "This is a card in position 0" />
      < List title = {props.listTitles[1]} cardText = "This is a card in postion 1" />
      < List title = {props.listTitles[2]} cardText = "This is a card in position 2" />
     </div>
     </div>
  );
}

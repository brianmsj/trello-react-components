// js/components/person-list.js
import React from 'react';
import Card from './card';

function renderCards(cards, deleteCard){
  return cards.map((card) => {
    return <Card key={card.id} id={card.id} deleteCard={deleteCard} cardText={card.text} />;
  });
}

export default function List(props) {
  const { deleteCard } = props;
    return (
        <div>
          <h3> {props.title} </h3>
            {renderCards(props.cards, deleteCard)}
          <form>
            <input type = "text" onChange = {e  => props.onAddInputChanged(e.target.value)} />
            <button type = "submit" onClick = {e => props.onAddSubmit(e)}>Submit</button>
           </form>
        </div>
    );
}

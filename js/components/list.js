// js/components/person-list.js
import React from 'react';
import Card from './card';


export default function List(props) {
    console.log(props);
    return (
        <div>
          <h3> {props.title} </h3>
            <Card className="card-list" card = {props.cards.map(item => item)}/>
          <form>
            <input type = "text" onChange = {e  => props.onAddInputChanged(e)} />
            <button type = "submit" onClick = {e => props.onAddSubmit(e.preventDefault())}>Submit</button>
           </form>
        </div>
    );
}



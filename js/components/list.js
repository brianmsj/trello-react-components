// js/components/person-list.js
import React from 'react';
import Card from './card';


// onAddInputChanged(event) {
//   console.log(event.target.value);
// }

export default function List(props) {
    return (
        <div>
          <h3> {props.title} </h3>
            <Card className="card-list" cardText = {props.cardText}/>
          <form>
            <input type = "text" onChange = {e  => props.onAddInputChanged(e)} />
            <button type = "submit" onClick = {e => props.onAddSubmit(e.preventDefault())}>Submit</button>
           </form>
        </div>
    );
}


function sayHello() {
  console.log('Hello Person');
}

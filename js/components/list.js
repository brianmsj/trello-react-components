// js/components/person-list.js
import React from 'react';
import Card from './card';

export default function List(props) {
    return (
        <div>
          <h3> {props.title} </h3>
            <Card className="card-list" cardText = {props.cardText}/>
        </div>
    );
}

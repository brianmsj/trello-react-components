import React from 'react';
import List from './list';

export default class ListContainer extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			listInput: '',
			cards: []
		};
	}

	render() {
		return (
			<List title = 'Test' onAddInputChanged = {function(){console.log("hello")}} 
			onAddSubmit = {function(){console.log("hi laura")}} cards = {this.state.cards} />
		);
	}

}
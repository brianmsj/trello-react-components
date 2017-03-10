import React from 'react';
import List from './list';
import uuid from 'uuid';

export default class ListContainer extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			cards: [ { id: uuid.v4(), text: 'foo' } ]
		};
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
		this.deleteCard = this.deleteCard.bind(this);
	}

	onAddInputChanged(text) {
		console.log(text);
		this.setState({text});
	};
  deleteCard(id){
		const deleteCards = this.state.cards.filter(card => card.id !== id);
		this.setState({cards: deleteCards});
	}
	onAddSubmit(e){
		e.preventDefault();
    const newCards = [ ...this.state.cards ];
		const newCard = { id: uuid.v4(), text: this.state.text };
		newCards.push(newCard);
		this.setState({cards: newCards});

	}


	render() {
		console.log(this.state.cards);
		return (
			<List title = 'Test' onAddInputChanged = {this.onAddInputChanged}
			onAddSubmit = {this.onAddSubmit} deleteCard = {this.deleteCard} cards = {this.state.cards} />
		);
	}

}

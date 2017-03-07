import React from 'react';

export default class Card extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        highlight: false,
      };
      this.highlightOn = this.highlightOn.bind(this);
      this.highlightOff = this.highlightOff.bind(this);
    }

    highlightOn() {
      this.setState({
        highlight: true
      });
    }

    highlightOff(){
      this.setState({
        highlight: false
      });
    }


    render() {
      const classes = `card ${this.state.highlight ? 'highlight' : ''}`;
      return (
        <div className= {classes} onMouseEnter = {this.highlightOn} onMouseLeave={this.highlightOff} >
          <p>{this.props.cardText}</p>
          <button onClick = {() => this.props.deleteCard(this.props.id)}>X</button>
        </div>
      );
    }
}

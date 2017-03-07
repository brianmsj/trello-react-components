import React from 'react';

export default class Card extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        highlight: false,
        counter: 100
      };
      this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    onMouseEnter() {
      this.setState({
        highlight: !this.state.highlight,
        counter: this.state.counter -1
      });
    }


    render() {
      const classes = `card ${this.state.highlight ? 'highlight' : ''}`;
      return (
        <div className= {classes} onClick = {this.onMouseEnter}>
          <p>{this.props.cardText}</p>
          <p>{this.state.counter}</p>
        </div>
    );
  }
}

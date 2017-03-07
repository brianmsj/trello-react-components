import React from 'react';

export default class Card extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        highlight: false,
      };
      this.foo = this.foo.bind(this);
    }

    foo() {
      this.setState({
        highlight: !this.state.highlight
      });
    }


    render() {
      const classes = `card ${this.state.highlight ? 'highlight' : ''}`;
      return (
        <div className= {classes} onMouserEnter = {this.onMouseEnter}>
          <p>{this.props.cardText}</p>
        </div>
    );
  }
}

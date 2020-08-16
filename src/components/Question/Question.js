import React from "react";
import {Link} from "react-router-dom";
import "./Question.css";

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      selected : "Gryffindor",
    }
  }

  onInputChange = event => {
    this.setState({
      selected : event.target.value,
    })
  }

  updateSelected = event => {
    event.preventDefault();

    this.props.onOkayClick(this.state.selected);

    this.setState({
      selected : "Gryffindor",
    })
  }

  updateLastSelected = () => {
    this.props.onOkayClick(this.state.selected);

    this.setState({
      selected : "Gryffindor",
    })

    this.props.completeSort();
  }

  render() {
    const {no, question, name, options} = this.props;
    return (
      <form className = "Question">
        <h1>{no} . {question}</h1>
        {options.map(option => {
          return (
            <div>
              <input 
                type="radio" 
                id={option.id} 
                name={name} value={option.value} 
                checked = {(option.value === this.state.selected) ? true : false}
                onChange = {this.onInputChange}/>
              <label for={option.id}>{option.text}</label><br/>
            </div>
           );
        })}

        {(no <= 5) ? 
          <button onClick = {this.updateSelected}> Okay </button> : 
          <Link to="/result"><button onClick = {this.updateLastSelected}>Done</button></Link>}
      </form>
    );
  }
}

export default Question;
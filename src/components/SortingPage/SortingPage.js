import React from "react";
import Question from "../Question/Question";
import "./SortingPage.css";

class SortingPage extends React.Component{
  constructor() {
    super();
    this.state = {
      selectedArray : [0, 0, 0, 0],
      i : 0
    }
  }

  onOkayClick = selected => {
    var newArray = [];
    switch(selected) {
      case "Gryffindor" :
        newArray = this.state.selectedArray;
        newArray[0] = newArray[0] + 1;
        this.setState({
          ...this.state,
          selectedArray : newArray,
          i : (this.state.i <= 4) ? this.state.i + 1 : this.state.i,
        });
        break;

      case "Hufflepuff" :
        newArray = this.state.selectedArray;
        newArray[1] = newArray[1] + 1;
        this.setState({
          ...this.state,
          selectedArray : newArray,
          i : (this.state.i <= 4) ? this.state.i + 1 : this.state.i,
        });
        break;

      case "Ravenclaw" :
        newArray = this.state.selectedArray;
        newArray[2] = newArray[2] + 1;
        this.setState({
          ...this.state,
          selectedArray : newArray,
          i : (this.state.i <= 4) ? this.state.i + 1 : this.state.i,
        });
        break;

      case "Slytherin" :
        newArray = this.state.selectedArray;
        newArray[3] = newArray[3] + 1;
        this.setState({
          ...this.state,
          selectedArray : newArray,
          i : (this.state.i <= 4) ? this.state.i + 1 : this.state.i,
        });
        break;

      default : 
        newArray = this.state.selectedArray;
        newArray[0] = newArray[0] + 1;
        this.setState({
          ...this.state,
          selectedArray : newArray,
          i : (this.state.i <= 4) ? this.state.i + 1 : this.state.i,
        });
        break;
    }
  }
  
  completeSort = () => {
    const indexOfMaxValue = this.state.selectedArray.indexOf(Math.max(...this.state.selectedArray));
    this.props.updateHouse(indexOfMaxValue);
  }

  render() {
    const {no, question, name, options} = this.props.houseArray[this.state.i];
    return (
      <div className = "SortingPage">
        <form>
          { <Question 
          completeSort = {this.completeSort}
          onOkayClick = {this.onOkayClick} no =   {no} question = {question} name = {name} options = {options} />
            }
        </form>
      </div>
    );
  }
    
}

export default SortingPage;
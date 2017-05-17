import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      valid: false
    };
  }

  haiku(){
    const input = this.state.text;
    const threeArr = (input.split('\n'))
    if (threeArr.length === 3 && threeArr[0].trim().split(' ').length === 5 && threeArr[1].trim().split(' ').length === 3 && threeArr[2].trim().split(' ').length ===5){
      this.setState({
        valid: true
      })
    } 
  }

  textControl(event){
        this.setState({
      text: event.target.value
    }, this.haiku )
  }


  render() {
    if (this.state.valid === false){
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.text} onChange={this.textControl.bind(this)}/>
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        </div>
      );
    } else {
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.text} onChange={this.textControl.bind(this)}/>
        </div>
      );
    }
  }
}

import React from 'react';
import Display from './Display.js'
import Buttons from './Buttons.js'
import './Calculator.css'
import KeyboardEventHandler from 'react-keyboard-event-handler';

//Need to add support for +- *- /- 
class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: '0',
      equation: '0',
      isSolved: false
    }
  }

  signs = ['/','*', '+', '-'];

  handleEqual() {
    this.setState((state) => {
      if(!state.isSolved)
      {
        let equation =state.equation.slice();
        let display = '';
        if(this.signs.includes(equation.substr(equation.length -1)))
        {
          equation = equation.slice(0, -1);
        }
        try {
          display = eval(equation);
      } catch (e) {
          if (e instanceof SyntaxError) {
              return{display: 'NaN', equation:'NaN'}
          }
      }
          equation+= '=' + display;
          return{display: display, equation: equation, isSolved: true}
      }
      return state;
    })
    
  }


  handleNumDecimal = (event) => {
      let display = this.state.display;
      let equation = this.state.equation;
      //Don't let user input more numbers if screen if full
      if(this.state.display.length === 29) {
          return;
      }
      //handle decimals
      if(event.target.value === '.')
      {
        if(!(""+this.state.display).includes('.') && !this.signs.includes(this.state.display))
        {
          this.setState({equation: this.state.equation + event.target.value, display: this.state.display + event.target.value, isSolved: false})
        }
        return;
      }
      //If calculator is at [expr] = number, reset the screen display on next input
      if(this.state.isSolved === true)
      {
        this.setState({equation: event.target.value, display: event.target.value, isSolved: false})
        return;
      }
      //If display has '0', replace display. Don't make it 05, 01, 02, etc.
      if(display === '0'){
        if(event.target.value === '.'){
          this.setState({display: '0' + event.target.value, equation: '0' + event.target.value})
        }else {
        this.setState({display: event.target.value, equation: event.target.value})
        }
      }
      //If display has a sign, replace it with the new number input and add sign to equation
      else if(this.signs.includes(display) ) {
          this.setState({display:event.target.value, equation: equation + event.target.value})
      }else{
        this.setState({ display: this.state.display + event.target.value, equation: this.state.equation + event.target.value});
      }
  }

  handleClear = () => {
      this.setState({display: '0', equation: '0'})
  }

  handleSign = (event) => {
    //If equation is number = number (ex. 5=5) replace input with number[sign](ex. 5/)
    if(this.state.isSolved === true)
    {
      this.setState({display: event.target.value, equation: this.state.display + event.target.value, isSolved: false})
      return;
    }

    //If the previous input was a number, concat the sign to the equation and update display
    if(!this.signs.includes(this.state.display))
    {
      if(this.state.equation === '0'){
        this.setState({equation: ''});
      }
      this.setState({display:event.target.value, equation:this.state.equation + event.target.value});
    }
    //Otherwise the previous input was a sign so replace it with the new sign(unless it's a minus)
    else{
      if(this.state.display !== '-' && event.target.value === '-')
      {
        this.setState({display:event.target.value, equation:this.state.equation + event.target.value});
      }else if(this.state.display === '-' && this.signs.includes(this.state.equation.substr(-2,1))){
        this.setState({display:event.target.value, equation: this.state.equation.slice(0, -2) + event.target.value})
      } else{
        this.setState({display:event.target.value, equation: this.state.equation.slice(0, -1) + event.target.value})
      }
    }
  }

  handleKey = (key, e) =>
  {
    if(e.keyCode === 190 || (e.keyCode >= 48 && e.keyCode <= 57 && !e.shiftKey))
    {
      this.handleNumDecimal({target:{value:e.key}});
    } else if(((e.keyCode === 56 || e.keyCode === 61) && e.shiftKey) || (e.keyCode === 173 || e.keyCode === 191))
    {
      if(e.keyCode === 191)
      {
        e = {key: '/'}
      }
      this.handleSign({target:{value:e.key}})
    }else if( e.keyCode === 61 || e.keyCode === 13) {
      this.handleEqual()
    } else {
      this.handleClear();
    }
  }

  render() {
    return(
      <KeyboardEventHandler
        handleEventType={"keyup"}
        handleKeys={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'shift+8', 'shift+/', '/', 'shift+=', '-', '=', 'shift+=', 'c', 'enter']}
        onKeyEvent={this.handleKey.bind(this)}>
            
        <div className="container bg-dark">
          <Display display={this.state.display} equation={this.state.equation}/>
          <Buttons number={this.handleNumDecimal.bind(this)}
            clear={this.handleClear.bind(this)}
            sign={this.handleSign.bind(this)}
            equals={this.handleEqual.bind(this)}/>
      </div>
      </KeyboardEventHandler>
            
    )
  }
}
export default Calculator;

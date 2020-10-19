import React from 'react'

class Clicker extends React.Component {
    constructor() {
        super()
        this.state = { counter: 0 }
        this.handleClickPlusOne = this.handleClickPlusOne.bind(this);
        this.handleClickMinusOne = this.handleClickMinusOne.bind(this);
        this.handleClickSquared = this.handleClickSquared.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleClickPlusOne(event) {
        debugger
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleClickMinusOne(event) {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    handleClickSquared(event) {
        this.setState({
            counter: this.state.counter * this.state.counter
        })
    }

    handleKeyDown(event) {
        debugger
        console.log(event.keyCode)
    }

    render() {
        return (
            <div>
                Clicker Comp
                <br/>
                <button onClick={this.handleClickPlusOne}>+</button>
                <button onClick={this.handleClickMinusOne}>-</button>
                <button onClick={this.handleClickSquared}>**</button>

                <br/>{this.state.counter}

                <br/><br/><br/><br/>
                <div className="game" onKeyDown={this.handleKeyDown}>
                    <div id="dodger" >

                    </div>
                </div>
                

            </div>
        )
    }

}

export default Clicker

// class MyButton extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 0};
//       this.buttonClicked = this.buttonClicked.bind(this);
//     }
    
//     buttonClicked(event) {
//       this.setState({value: this.state.value+1});
//     }
    
//     render() {
//       return (
//           <div>
//           <div>{this.state.value}</div>
//           <button onClick={this.buttonClicked}>Click</button>
//         </div>
//       );
//     }
//   }
  

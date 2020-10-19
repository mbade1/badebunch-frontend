import React from 'react'

class Clicker extends React.Component {
    constructor() {
        super()
        this.state = { counter: 0 }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        debugger
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                Clicker Comp
                <button onClick={this.handleClick}>Click me!</button>
                <br/>{this.state.counter}
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
  

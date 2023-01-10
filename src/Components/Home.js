import {Component} from 'react'
import './home.css'

class Home extends Component {
  state = {
    input1: '',
    input2: '',
    output: '',
  }

  setMasterInput1 = event => {
    this.setState({input1: event.target.value})
  }

  setMasterInput2 = event => {
    this.setState({input2: event.target.value})
  }

  addButton = () => {
    const {input1, input2} = this.state
    this.setState({output: parseInt(input1) + parseInt(input2)})
  }

  minusButton = () => {
    const {input1, input2} = this.state
    this.setState({output: parseInt(input1) - parseInt(input2)})
  }

  multiButton = () => {
    const {input1, input2} = this.state
    this.setState({output: parseInt(input1) * parseInt(input2)})
  }

  divideButton = () => {
    const {input1, input2} = this.state
    this.setState({output: parseInt(input1) / parseInt(input2)})
  }

  render() {
    const {input1, input2, output} = this.state
    return (
      <div className="home">
        <h1 className="heading">Calculation</h1>
        <div className="form-group">
          <label className="n" htmlFor="master">
            MasterInput1
          </label>
          <input
            id="master"
            value={input1}
            type="text"
            className="form-control"
            placeholder="Enter Number"
            onChange={this.setMasterInput1}
          />
        </div>
        <div className="form-group">
          <label className="n" htmlFor="master">
            MasterInput2
          </label>
          <input
            id="master"
            value={input2}
            type="text"
            className="form-control"
            placeholder="Enter Number"
            onChange={this.setMasterInput2}
          />
        </div>
        <div className="button-container">
          <button onClick={this.addButton} className="button1" type="button">
            +
          </button>
          <button onClick={this.minusButton} className="button1" type="button">
            -
          </button>
          <button onClick={this.multiButton} className="button1" type="button">
            *
          </button>
          <button onClick={this.divideButton} className="button1" type="button">
            /
          </button>
        </div>
        <h1 className="output">Student Output : {output}</h1>
      </div>
    )
  }
}

export default Home

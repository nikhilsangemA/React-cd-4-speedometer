import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  brake = () => {
    const {speed} = this.state
    if (speed >= 10) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-black-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          className="img-size"
          alt="speedometer"
        />
        <h1 className="speedCount">
          Speed is {speed}mph
        </h1>
        <p className="speedLimit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="btn-1" onClick={this.accelerate}>
            Accelerate
          </button>
          <button type="button" className="btn-2" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

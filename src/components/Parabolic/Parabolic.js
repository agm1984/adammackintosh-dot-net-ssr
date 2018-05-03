import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import generate from './parabolic_logic'

const random = (max) => Math.floor(Math.random() * Math.floor(max))

const TestSVG = ({ children }) => {
  return (
    <div id="">
      {ReactDOM.createPortal(
        children,
        document.getElementById('test-svg')
      )}
    </div>
  )
}

class Parabolic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastCircle: {
        width: 0,
        height: 0,
      }
    }
  }

  /**
   * Usage: this.makeCircle()
   */
  makeCircle = () => {
    const r = random(100)
    return (
      <svg height={`${r}`} width={`${r}`}>
        <path d="M10 10" />
        <circle cx={`${r/2}`} cy={`${r/2}`} r={`${r/2}`} fill="red" />
      </svg>
    )
  }

  makeCurve1 = () => {
    // let iterations = 300
    // let counter = 0
    // let step = 10
    return (
      <svg xmlns="svg" xmlnsXlink="http://www.w3.org/2000/svg">
        {[...new Array(300)].map((x, i) => (
          <line
            key={i}
            x1={`${10 * i}`}
            y1={`${100 * i}`}
            x2={`${100 * i}`}
            y2={`${100 * i}`}
            stroke="rgb(255, 0, 0)"
            strokeWidth="2"
          />
        ))}
      </svg>
    )
  }

  


  render() {
    return (
      <div id="test-svg">
        <TestSVG>
          <line
            x1={`${10}`}
            y1={`${10}`}
            x2={`${100}`}
            y2={`${100}`}
            stroke="rgb(255, 0, 0)"
            strokeWidth="2"
            />
        </TestSVG>
      </div>
    )
  }
}

export default Parabolic

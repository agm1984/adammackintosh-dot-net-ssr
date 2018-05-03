import React, { Component } from 'react'

class Parabolic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      background: '',
    }
  }

  setMouseBacklight = (props) => {
    const {
      shape,
      style,
      posX,
      posY,
      innerColor,
      innerDistance,

    } = this.state
    return this.setState({
      background: `radial-gradient(${shape} ${style} at ${posX}px ${posY}px, ${innerColor} ${innerDistance}, ${glowColor}, ${outerColor} ${outerDistance})`,
    })
  }
  render() {
    this.setMouseBacklight({
      // glowing sphere
      shape: 'circle',
      style: 'closest-side',
      posX: this.state.posX,
      posY: this.state.posY,
      innerColor: '#fff',
      innerDistance: '-10%',
      glowColor: '#121',
      outerColor: '#000',
      outerDistance: '50%',
    })
    return (
      <div
        style={{
          background: this.state.background
        }}
      >
        TEST
      </div>
    )
  }
}

export default Parabolic

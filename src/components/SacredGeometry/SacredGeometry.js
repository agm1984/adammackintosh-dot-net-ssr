import React, { Component } from 'react'
import PropTypes from 'prop-types'
import generate from './geometry_logic'

class SacredGeometry extends Component {
  constructor(props) {
    super(props)
    this.node = null
    this.state = {
      controlled: false,
      // canvas
      // backColor: '#000',
      rotation: 180,
      // shapes
      count: 3,
      radius: 0.1,
      offset: 0.5,
      // connections
      centers: true,
      intersects: true,
      network: false,
      // generations
      genStart: 0,
      genEnd: 2,
      scaleGeneration: 0.99,
      offsetGeneration: 0.4,
      // style
      circleWeight: 3,
      circleColor: '#014420',
      circleOpacity: 1.0,
      circleFillColor: '#222222',
      circleFillOpacity: 1.0,
      dotWeight: 12,
      dotColor: '#eeeeee',
      dotOpacity: 1.0,
      lineWeight: 0.1,
      lineColor: '#66FCF1',
      lineOpacity: 1.0,
    }
  }

  componentWillMount() {
    const {
      circleColor, dotColor, lineColor,
    } = this.props
    // this.increaseCount()
    // this.repeat()
    this.setState({
      circleColor,
      dotColor,
      lineColor,
    })
  }

  increaseCount = () => {
    for (let count = 0; count < 10; count += 1) {
      setTimeout(() => {
        // console.log('test', 'asdf')
        this.setState({ count })
      }, count * 500)
    }
  }

  repeat = () => {
    for (let count = 0; count < 100; count += 1) {
      setTimeout(() => {
        this.setState({ rotation: Math.random() })
      }, count * 1000)
    }
  }

  render() {
    const { extraStyles } = this.props
    const defaultStyles = {
      position: 'absolute',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      zIndex: -1,
      background: 'none',
      opacity: 0.25,
      transition: 'all 1000ms ease-in-out',
    }
    return (
      <iframe
        ref={(node) => { this.node = node }}
        scrolling="no"
        srcDoc={generate(this.state)}
        name="sacredGeometry"
        title="sacredGeometry"
        frameBorder="0"
        style={{
          position: 'relative',
          ...defaultStyles,
          ...extraStyles,
          zIndex: 0,
        }}
      />
    )
  }
}

SacredGeometry.propTypes = {
  circleColor: PropTypes.string.isRequired,
  dotColor: PropTypes.string.isRequired,
  lineColor: PropTypes.string.isRequired,
  extraStyles: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default SacredGeometry

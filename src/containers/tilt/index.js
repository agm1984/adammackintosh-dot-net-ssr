import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Page from '../../components/page'
import { addNotification } from '../../components/notifications/notifications_actions'
import Tilt from './Tilt'
import WindowsBack from './Windows98.png'
import WindowsFront from './Windows98-Window.jpg'
import './Tilt.css'

const optionsBack = {
  max: 10,
  perspective: 1000,
  scale: 1.05,
}

const optionsFront = {
  max: 10,
  perspective: 1000,
  scale: 1.07,
}

const ProjectPreview = (props) => {
  const { options, image, children } = props
  return (
    <Tilt
      className="tilt-container"
      options={options}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </Tilt>
  )
}

class Tiltphoto extends Component {
  render() {
    console.log('test')
    return (
      <div>
        <ProjectPreview
          options={optionsBack}
          image={WindowsBack}
        >
          <ProjectPreview
            options={optionsFront}
            image={WindowsFront}
          />
        </ProjectPreview>
      </div>
    )
  }
}

export default Tiltphoto
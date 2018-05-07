import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { push, goBack } from 'react-router-redux'
import Modal from './Modal'
import ExampleContent from './ExampleContent'
import './Examples.css'

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isImageHidden: true,
    }
  }

  componentDidMount() {
    return window.scrollTo(0, 0)
  }

  toggleModal = singleImage => this.setState(prevState => ({
    singleImage,
    isImageHidden: !prevState.isImageHidden,
  }))

  handleClose = () => {
    if (this.state.isImageHidden) {
      return this.props.dispatch(goBack())
    }
    const { activeCategory, category } = this.props
    if (activeCategory === 'viewAll') {
      return this.props.dispatch(push('/examples'))
    }
    return this.props.dispatch(push(`/examples/${category}`))
  }

  render() {
    const [
      , , , , enlargedImage,
    ] = this.props.routing.location.pathname.split('/')
    const { project } = this.props
    const { isImageHidden } = this.state

    // IF NO PROJECT, RETURN TO EXAMPLES
    if (!project || !Object.keys(project).length) {
      return <Redirect to="/examples" />
    }

    if (!enlargedImage) {
      return (
        <ExampleContent project={project} />
      )
    }

    return (
      <Modal
        show={isImageHidden}
        modalStyles={{
          position: 'relative',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage: `url(${project.feature_images[enlargedImage].image_src})`,
        }}
        onClose={() => this.handleClose()}
      />
    )
  }
}

Example.propTypes = {
  routing: PropTypes.shape({ location: PropTypes.any }).isRequired,
  activeCategory: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  project: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect()(Example)

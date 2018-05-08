import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hideNav, showNav } from '../../components/nav/nav_actions'
import './Modal.css'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.node = null
  }

  componentDidMount() {
    this.props.hideNav()
    document.addEventListener('keydown', this.handleOutsideClick, false)
    return document.addEventListener('mousedown', this.handleOutsideClick, false)
  }

  componentWillUnmount() {
    this.props.showNav()
    document.removeEventListener('keydown', this.handleOutsideClick, false)
    return document.removeEventListener('mousedown', this.handleOutsideClick, false)
  }

  handleOutsideClick = (e) => {
    if (this.node && this.node.contains(e.target)) {
      // Clicks inside Modal
      return null
    }
    if (!this.node) {
      // Fires once when Modal mounts
      return null
    }
    // Clicks outside Modal
    return this.props.onClose()
  }

  render() {
    const {
      show, children, onClose, backdropStyles, modalStyles,
    } = this.props
    if (!show) {
      return null
    }

    return (
      <div className="modal_backdrop" style={backdropStyles}>
        <div id="modal_line" />
        <div
          ref={(node) => { this.node = node }}
          className="modal_window"
          style={modalStyles}
        >
          {children}
        </div>
        <button
          className="modal_closeButton"
          onClick={onClose}
          title="Close (or press ESC)"
        >
          <svg viewBox="0 0 40 40">
            <path
              className="modal_closeButton-icon"
              d="M 10,10 L 30,30 M 30,10 L 10,30"
            />
          </svg>
        </button>
      </div>
    )
  }
}

Modal.defaultProps = {
  show: false,
  backdropStyles: undefined,
  modalStyles: undefined,
  children: undefined,
}
Modal.propTypes = {
  show: PropTypes.bool,
  hideNav: PropTypes.func.isRequired,
  showNav: PropTypes.func.isRequired,
  backdropStyles: PropTypes.objectOf(PropTypes.any),
  modalStyles: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

export default connect(null, { hideNav, showNav })(Modal)

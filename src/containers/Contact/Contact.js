import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { push } from 'react-router-redux'
import Page from '../../components/page'
import SacredGeometry from '../../components/SacredGeometry/SacredGeometry'
import ContactForm from './Form'
import CONTACT_MUTATION from './contact_mutations'
import './Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldDisplaySuccessMessage: false,
    }
  }

  copyEmailToClipboard = (text) => {
    const { shouldDisplaySuccessMessage } = this.state
    const textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    if (shouldDisplaySuccessMessage) return null
    return this.setState({ shouldDisplaySuccessMessage: true }, () =>
      setTimeout(() => this.setState({ shouldDisplaySuccessMessage: false }), 1618))
  }

  handleMessageSend = async (message) => {
    try {
      await this.props.mutate({
        variables: { ...message },
      })
      return this.props.dispatch(push('/'))
    } catch (e) {
      return null
    }
  }

  render() {
    const { shouldDisplaySuccessMessage } = this.state
    return (
      <Page
        id="contact"
        className=""
        title="Examples"
        description="See some of Adam's examples"
      >
        <div id="contact_form-wrapper">
          <div id="contact_form">
            <div id="contact_left">
              <SacredGeometry
                circleColor="#FF5043"
                dotColor="#45A29E"
                lineColor="#C5C6C7"
                extraStyles={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0.2,
                  zIndex: 0,
                }}
              />
              <h1>contact</h1>
              <p>Ready to get in touch?</p>
              <p>Send a message here, or email me at adam@adammackintosh.net</p>
              {!shouldDisplaySuccessMessage && (
                <button
                  id="contact_clipboard"
                  onClick={() => this.copyEmailToClipboard('adam@adammackintosh.net')}
                >
                  COPY TO CLIPBOARD
                </button>
              )}
              {shouldDisplaySuccessMessage && (
                <div
                  id="contact_clipboard-success"
                >
                  COPIED TO CLIPBOARD
                  <span>✓</span>
                </div>
              )}
              <div id="contact_reasons-wrapper">
                <p>I especially enjoy working with people who:</p>
                <ul id="contact_reasons">
                  <li>have clear goals</li>
                  <li>maintain a growth mindset</li>
                  <li>value precision &amp; thoroughness</li>
                </ul>
              </div>
              <div id="contact_form-line" />
            </div>
            <div id="contact_right">
              <ContactForm
                onSubmit={message => this.handleMessageSend(message)}
              />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

Contact.propTypes = {
  mutate: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default compose(
  connect(),
  graphql(CONTACT_MUTATION),
)(Contact)

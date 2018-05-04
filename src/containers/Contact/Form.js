import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'react-apollo'
import { reduxForm, Field } from 'redux-form'
import { TextInput, TextArea } from '../../components/ui'
import Verification from './Verification'
import { handleVerificationPass, handleVerificationFail } from './contact_actions'
import './Contact.css'

/**
 * Creates a random number used for creation of mathematical solutions
 * that are used for a human verification step before submitting.
 */
const generateRandom = () => Math.floor((Math.random() * 10) + 1)

/**
 * I added custom human-verification logic to illustrate the deceptively-complex requirements
 *  associated with it. Private solution state management is well-handled by React.
 *
 * In production environment, I would likely outsource verification requirements
 * to something like Google's Recaptcha:
 *                                       URL: https://github.com/appleboy/react-recaptcha
 */
class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: generateRandom(),
      num2: generateRandom(),
      animate: false,
    }
  }

  handleVerification = (value) => {
    const { num1, num2 } = this.state
    if (value === (num1 + num2)) {
      requestAnimationFrame(() => this.props.handleVerificationPass())
    }
    if (value !== (num1 + num2)) {
      requestAnimationFrame(() => this.props.handleVerificationFail())
    }
  }

  // This form delegates post-submit control to the parent scope.
  // Pre-submit control is handled by this form.
  render() {
    const { isFormVerified } = this.props
    const { num1, num2, animate } = this.state
    const {
      handleSubmit, pristine, submitting,
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            component={TextInput}
            type="text"
            name="message_subject"
            placeholder="SUBJECT"
            isSubject
          />
          <Field
            component={TextArea}
            type="text"
            name="message_content"
            placeholder="MESSAGE"
            onFocus={() => this.setState({ animate: true })}
            style={{
              height: animate ? '17.6rem' : '6.4rem',
              transition: 'all 2s',
            }}
          />
          <div className="contact_form-splitter">
            <div className="contact_input-half">
              <Field
                component={TextInput}
                type="text"
                name="message_senderName"
                placeholder="NAME"
              />
            </div>
            <div className="contact_input-divider" />
            <div className="contact_input-half">
              <Field
                component={TextInput}
                type="text"
                name="message_senderEmail"
                placeholder="EMAIL"
              />
            </div>
          </div>
          <div className="contact_form-splitter">
            <div id="contactForm_finalRow">
              <div id="contactForm_finalRow-left">
                <div className="contact_form_verification-question">
                  {`${num1} + ${num2} =`}
                </div>
                <div className="contact_input-divider" />
                <div className="contact_form_verification-solution">
                  <Field
                    ref={(node) => { this.verificationInput = node }}
                    component={Verification}
                    type="text"
                    name="message_verification"
                    placeholder=""
                    solution={num1 + num2}
                    onInputChange={this.handleVerification}
                  />
                </div>
                <div className="contact_input-divider lastDivider" />
              </div>
              <div id="contactForm_finalRow-right">
                <button
                  className={(isFormVerified)
                    ? 'contact_submit-ready'
                    : 'contact_submit-default'}
                  disabled={pristine || submitting}
                  type="submit"
                  href="#contact_message"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

const validate = (fields) => {
  const {
    person_name,
    person_email,
    person_tel,
    message_subject,
    message_content,
    message_verification,
  } = fields
  const errors = {}
  if (!person_name) {
    errors.person_name = 'Please specify your name.'
  }
  if (!person_email) {
    errors.person_email = 'Please specify your email.'
  }
  if (!person_tel) {
    errors.person_tel = 'Please specify a phone number.'
  }
  if (!message_subject) {
    errors.message_subject = 'Please specify a subject.'
  }
  if (!message_content) {
    errors.message_content = 'Please specify a message.'
  }
  if (message_content && message_content.length > 2000) {
    errors.message_content = 'Message cannot exceed 2000 characters.'
  }
  if (!message_verification) {
    errors.message_verification = 'Try again.'
  }
  return errors
}

ContactForm.propTypes = {
  handleVerificationPass: PropTypes.func.isRequired,
  handleVerificationFail: PropTypes.func.isRequired,
  isFormVerified: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ contact }) => ({
  isFormVerified: contact.isFormVerified,
})

export default compose(
  connect(mapStateToProps, {
    handleVerificationPass, handleVerificationFail,
  }),
  reduxForm({ validate, form: 'Contact' }),
)(ContactForm)

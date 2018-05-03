import React from 'react'
import PropTypes from 'prop-types'
import './ui.css'

const TextInput = (props) => {
  const {
    input, name, placeholder, type, meta, isSubject,
  } = props
  const { touched, error } = meta
  const inputType = isSubject
    ? 'contact_input subjectLine'
    : 'contact_input'
  const hasValue = (input.value)
    ? 'edit_filled'
    : 'edit_empty'
  const hasError = (touched && error)
    ? `${inputType} error`
    : `${inputType} normal ${hasValue}`
  const extraInputMargin = (isSubject && (touched && error))
    ? ({ marginBottom: '6.4rem', transition: 'all 2s' }) : ({})
  const extraErrorMargin = isSubject
    ? ({ marginBottom: '4.0rem', transition: 'all 2s' }) : ({})
  return (
    <div className="edit_rowcontainer">
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        className={hasError}
        style={extraInputMargin}
        {...input}
      />
      {touched && (error && (
        <span
          className="edit_required"
          style={extraErrorMargin}
        >
          {error}
        </span>
      ))}
    </div>
  )
}

TextInput.defaultProps = {
  input: undefined,
  name: undefined,
  placeholder: undefined,
  passwordEntry: undefined,
  meta: undefined,
  isSubject: false,
}
TextInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any,
  }),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  passwordEntry: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  isSubject: PropTypes.bool,
}

export default TextInput

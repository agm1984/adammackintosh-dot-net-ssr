import React from 'react'
import PropTypes from 'prop-types'

const Verification = (props) => {
  const {
    input, name, placeholder, type, meta, solution, onInputChange,
  } = props
  const { touched, error } = meta
  const isSolved = (input.value && (solution === +input.value))
    ? 'contact_verification-pass'
    : (!input.value) ? '' : 'contact_verification-fail'
  const hasValue = (input.value)
    ? 'edit_filled'
    : 'edit_empty'
  const hasError = (touched && error)
    ? `contact_input ${isSolved} error`
    : `contact_input ${isSolved} normal ${hasValue}`
  onInputChange(+input.value)
  return (
    <div className="edit_rowcontainer">
      <input
        style={{
          fontFamily: 'Oswald, serif',
          fontWeight: '200',
          fontSize: '2.2rem',
          lineHeight: '2.2rem',
          letterSpacing: '0.23em',
        }}
        placeholder={placeholder}
        name={name}
        type={type}
        className={hasError}
        {...input}
      />
      {touched && (error && (
        <span
          className="edit_required"
          style={{ marginLeft: 0 }}
        >
          {error}
        </span>
      ))}
    </div>
  )
}

Verification.defaultProps = {
  input: undefined,
  name: undefined,
  placeholder: undefined,
  meta: undefined,
}
Verification.propTypes = {
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
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  solution: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

export default Verification

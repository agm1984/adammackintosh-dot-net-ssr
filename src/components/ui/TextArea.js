import React from 'react'
import PropTypes from 'prop-types'
import './ui.css'

const TextArea = (props) => {
  const {
    input, name, placeholder, meta, style,
  } = props
  const { touched, error } = meta
  const maybeHasValue = (input.value)
    ? 'edit_filled'
    : 'edit_empty'
  const maybeHasError = (touched && error)
    ? 'contact_input contact_textArea error'
    : `contact_input contact_textArea normal ${maybeHasValue}`
  return (
    <div className="edit_rowcontainer">
      <div className="edit_row-item">
        <textarea
          id={name}
          className={maybeHasError}
          name={name}
          placeholder={placeholder}
          style={style}
          {...input}
        />
      </div>
      {touched && (error && <span className="edit_required">{error}</span>)}
    </div>
  )
}

TextArea.defaultProps = {
  label: undefined,
  input: undefined,
  name: undefined,
  required: undefined,
  meta: undefined,
  style: undefined,
}
TextArea.propTypes = {
  label: PropTypes.string,
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
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  style: PropTypes.objectOf(PropTypes.any),
}

export default TextArea

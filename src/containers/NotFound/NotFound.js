import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Page from '../../components/page'
import './NotFound.css'

const NotFound = props => (
  <Page
    id="notfound"
    title="Page Not Found"
    noCrawl
  >
    <h1 id="notfound_heading">
      404
    </h1>
    <h2 id="notfound_subheading">
      {props.location.pathname} is not correct...
    </h2>
    <NavLink to="/examples" id="notfound_button">VIEW EXAMPLES</NavLink>
  </Page>
)

NotFound.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default NotFound

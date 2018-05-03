import React from 'react'
import Page from '../../components/page'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default (props) => (
  <Page
    id="notfound"
    title="Page Not Found"
    noCrawl
  >
      <h1 id="notfound_heading">
        404
      </h1>
      <h2 id="notfound_subheading">
        {props.location.pathname} can't be found...
      </h2>
      <Link to="/examples" id="notfound_button">Show Examples</Link>
  </Page>
)

//asdfsdf
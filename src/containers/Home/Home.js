import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from '../../components/page'
import { addNotification } from '../../components/notifications/notifications_actions'
import adam from './adam.png'
import './Home.css'

// This is part of upcoming non-MVP functionality related to gamification
// Notification alerts are baked into the core but will be enabled later.
// <button
//   onClick={() => this.props.addNotification({ text: 'Test notification' })}
// >
//   Generate Notification
// </button>

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Page
        id="home"
        className=""
        title="Home"
        description="Welcome to Adam Mackintosh's Portfolio"
      >
        <div id="home_cover">
          <div id="home_avatar" style={{ backgroundImage: `url(${adam})` }} />
          <h2 id="home_leadIn">THE PORTFOLIO OF</h2>
          <h1 className="home_name">adam</h1>
          <h1 className="home_name">mackintosh</h1>
        </div>
      </Page>
    )
  }
}

export default connect(null, { addNotification })(Home)

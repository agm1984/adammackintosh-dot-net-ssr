import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import adam from './adam.png'
import './UserDetails.css'

class UserDetails extends Component {
  constructor(props) {
    super(props)
    let start = true
    this.state = {
      name: 'adam',
      avatar: adam,
      level: this.getCurrentAge('08/14/1984', '04/05/2018'),
      levelXP: 0,
      levelXPRequired: 1337,
    }
    if (start) {
      for (let i = 0; i < 20; i += 1) {
        setTimeout(() => this.updateXP(), i * 100)
      }
      start = false
    }
  }

  getCurrentAge = (birthDate, currentDate) => {
    const birth = new Date(birthDate)
    const current = new Date(currentDate)
    let years = (current.getFullYear() - birth.getFullYear())

    if (((current.getMonth() < birth.getMonth()) || (current.getMonth() === birth.getMonth()))
      && current.getDate() < birth.getDate()) {
      years -= 1
    }

    return years
  }

  getRandomXP = () => this.setState({
    levelXP: Math.floor((Math.random() * 5000) + 1),
  })

  /**
   * This adds commas into the specified number,
   * ie: 1000000 becomes 1,000,000
   */
  withCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  updateXP = () => {
    if (!this) {
      console.log('CLOSED PREMATURELY')
    }
    if (this.state.levelXP > this.state.levelXPRequired) {
      return null
    }
    const num = this.state.levelXP + 90
    if (num >= 1337) {
      return this.setState({ levelXP: 1337 })
    }
    return this.setState({ levelXP: this.state.levelXP + Math.floor((Math.random() * 100) + 1) })
  }

  render() {
    const {
      avatar, level, name, levelXP, levelXPRequired,
    } = this.state
    return (
      <div id="nav_left_user-container">
        <div id="nav_left_user_leftSide">
          <div
            id="nav_left_user-avatar"
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(${avatar})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          />
          <div id="nav_left_user-level">
            {level}
          </div>
        </div>
        <div id="nav_left_user_rightSide">
          <div id="nav_left_user-name">
            {name}
          </div>
          <div id="nav_left_user-xpFill">
            <div
              id="nav_left_user-xp"
              style={{
                width: `${(+levelXP / +levelXPRequired) * 100}%`,
                transition: 'width 500ms ease-in-out',
              }}
            />
          </div>
          <div id="nav_left_user-xpNum">
            <div id="nav_left_user-xpNumerator">
              {`${this.withCommas(levelXP)}\u00a0`}
            </div>
            <div id="nav_left_user-xpDenominator">
              / {this.withCommas(levelXPRequired)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetails

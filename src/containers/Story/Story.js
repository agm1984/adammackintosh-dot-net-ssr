import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Page from '../../components/page'
import adamLeft from './images/adam-left.png'
import adamCenter from './images/adam-center.png'
import adamRight from './images/adam-right.png'
import './Story.css'

class Story extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleScrollDown = () => window.scrollTo({
    top: window.innerHeight / 2,
    behavior: 'smooth',
  })

  handleScrollBackToTop = () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  renderDownScroller = () => (
    <button
      id="downScroller"
      onClick={this.handleScrollDown}
      title="Click or scroll down to see more"
    >
      ⇩
    </button>
  )

  renderContactButton = () => (
    <NavLink
      to="/contact"
      className="btn"
      title="Start a conversation with Adam"
    >
      CONTACT
    </NavLink>
  )

  render() {
    const { currentScrollYPosition } = this.props
    return (
      <div id="story-wrapper">
        {(+currentScrollYPosition === 0) && this.renderDownScroller()}
        <Page
          id="story"
          className=""
          title="Adam Mackintosh Story"
          description="Story page will have a custom set description"
        >
          <h1 className="timeline-title">A MACKINTOSH TREE</h1>
          <div id="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                API
              </div>
              <div className="timeline-content">
                <h2>backend developer</h2>
                <p>
                  Since 2002, I have helped build, maintain, and promote products &amp; services
                  from various perspectives.
                  I have been programming off and on since before then. Since the
                  emergence of React, I have settled as a fullstack web and mobile developer.
                  I advocate Functional Programming techniques, and I prefer to use GraphQL,
                  node.js, React, and React Native.
                </p>
                {this.renderContactButton()}
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                APP
              </div>
              <div className="timeline-content right">
                <h2>frontend developer</h2>
                <p>
                  I am comfortable working in the DOM.
                  I enjoy the science behind building performant, fluid interfaces.
                  I can implement virtually anything that can be described on paper.
                </p>
                {this.renderContactButton()}
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                QA
              </div>
              <div className="timeline-content">
                <h2>quality assurance</h2>
                <p>
                  After years of hands-on QA experience helping optimize pre-production
                  software and print materials against business objectives,
                  I appreciate Test-Driven Development (TDD). I know the
                  most about affected logic and features while I am working on them.
                  Memory fades—this is also why readable code and verbose documentation
                  are valuable. I appreciate a build-measure-learn
                  feedback loop because it describes the scientific method.
                </p>
                {this.renderContactButton()}
              </div>
            </div>
          </div>

          <h1 className="timeline-title timeline-bonusPadding">A TEAM</h1>

          <div id="team-container-wrapper">
            <div id="team-container">

              <div className="team_person">
                <div
                  className="team_person-avatar"
                  style={{ backgroundImage: `url(${adamLeft})` }}
                />
                <h1 className="team_person-title">adam backend</h1>
                <p className="team_person-blurb">
                  I compose functions in node.js.
                  I like polyglot microservices, graph database paired with GraphQL, and websockets.
                  I strive to make easy to maintain, extend, and test APIs.
                </p>
              </div>

              <div className="team_person">
                <div
                  className="team_person-avatar"
                  style={{ backgroundImage: `url(${adamCenter})` }}
                />
                <h1 className="team_person-title">adam qa</h1>
                <p className="team_person-blurb">
                  A good QA effort allows implementation details to change with
                  minimal to no effect on the existing test suite.
                  I prefer continuous integration and testing in multiple environments.
                </p>
                {this.renderContactButton()}
              </div>

              <div className="team_person">
                <div
                  className="team_person-avatar"
                  style={{ backgroundImage: `url(${adamRight})` }}
                />
                <h1 className="team_person-title">adam frontend</h1>
                <p className="team_person-blurb">
                  Designing UIs can be easy.
                  Take a constraint, and use it to implement a ruleset that
                  communicates effectively in a riveting manner.
                  Maximizing UX is a different story.
                </p>
              </div>
            </div>
          </div>

          <h1 className="timeline-title timeline-bonusPadding">A BRIEF WORD</h1>
          <div id="info-wrapper">
            <div id="info-container">
              <div className="info_split">
                <h3 className="info_split-title">to non-programmers</h3>
                <div id="info_split-container">
                  <div className="info_split-column">
                    <h4 className="info_split-heading">work</h4>
                    <p className="info_split-content">
                      As a developer, I aim to write not only pragmatic and UX-enriched
                      code but also empathetic and thorough technical documentation.
                      I am always curious to learn new tools and techniques.
                    </p>
                  </div>
                  <div className="info_split-column">
                    <h4 className="info_split-heading">life</h4>
                    <p className="info_split-content">
                      I am introverted and creative and known for being light hearted,
                      precise, and thorough. I decompress from work by going to
                      the gym and cooking nice meals for other people.
                      I like the chemistry behind balancing salty, sweet, sour, and hot.
                    </p>
                  </div>
                  <div className="info_split-column">
                    <h4 className="info_split-heading">balance</h4>
                    <p className="info_split-content">
                      Fitness &amp; nutrition has been a way of life for me for the past ten years.
                      A healthy mind and optimized metabolic processes both start with
                      optimized nutrient-intake.
                    </p>
                  </div>
                </div>
              </div>
              <div className="info_split">
                <h3 className="info_split-title">to programmers</h3>
                <div id="programmers-container">
                  <p className="story_paragraph">
                    I like JavaScript (JS) because it is a language made of atomic logical blocks
                    that I would call function-by-reference objects.
                    A function is a place to do work, like in Mathematics.
                    This is fundamentally why I am passionate about deterministic transformations.
                    JS can be perfectly-efficient because a person can compose
                    functions together with absolutely-minimized time and complexity
                    as long as this person adheres to some rules and best-practices
                    that include protective layers.
                  </p>
                  <p className="story_paragraph">
                    With JS, the imperative-nature of Functional Programming
                    matches up well with the declarative-nature of both Objects and event streams;
                    immutability is important because shared state and side
                    effects are very dangerous. Understanding the event loop and garbage
                    collection helps a lot. Aiming for referential transparency helps even more.
                  </p>
                  <p className="story_paragraph">
                    Some consider JS to be loose, and they are correct,
                    but dynamic-typing allows one to rapidly spool out logic
                    in any desired direction.
                    JS is a language of great productivity towards both APIs and apps.
                    It is an isomorphic dominator. Reach out to me on Twitter if you want
                    to pick up the conversation. I'd love to hear your thoughts or provide additional context.
                  </p>
                  <p className="story_paragraph">
                    I would need more time to explain, but JS is great at managing streams
                    of concurrent, potentially-unrelated actions and events
                    while maximizing what I would call lossless IOPs (Input/Outputs per second).

                    JS has everything I need to quickly create scalable,
                    performant applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="timeline-title timeline-bonusPadding">A COUPLE PATHS</h1>
          <div id="path-wrapper">
            <div id="path-container">
              <NavLink
                to="/skills"
                className="btn"
                title="See Adam's skills"
              >
                SEE SKILLS
              </NavLink>
              <div className="path-divider" />
              <NavLink
                to="/contact"
                className="btn"
                title="Start a conversation with Adam"
              >
                CONTACT
              </NavLink>
            </div>

            <div id="story-footer">
              <div id="story-left">
                <div className="nav_adamLogo" />
                <span id="Nav_brand-adam">ADAM</span>
                <span id="Nav_brand-mackintosh">MACKINTOSH</span>
              </div>
              <div id="story-center">
                <span id="story-conclusion">△△△</span>
              </div>
              <div id="story-right" />
            </div>

            <button
              id="backToTopScroller"
              onClick={this.handleScrollBackToTop}
              title="Back to top?"
            >
              ⇧
            </button>
          </div>
        </Page>

      </div>
    )
  }
}

Story.propTypes = {
  currentScrollYPosition: PropTypes.number.isRequired,
}

const mapStateToProps = ({ nav }) => ({
  currentScrollYPosition: nav.currentScrollYPosition,
})
export default connect(mapStateToProps)(Story)

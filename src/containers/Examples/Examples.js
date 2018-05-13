import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Page from '../../components/page'
import Tilt from './Tilt'
import Example from './Example'
import { handleDisableDownScrollerButton } from '../../components/nav/nav_actions'
import { markExampleSeen } from './examples_actions'
import './Examples.css'

/**
 * Returns boolean for whether or not window.body currently
 * has a scrollbar.
 */
const hasVerticalScroll = (node) => {
  if (!node) {
    if (window.innerHeight) {
      return document.body.offsetHeight > window.innerHeight
    }
    return (document.documentElement.scrollHeight > document.documentElement.offsetHeight)
      || (document.body.scrollHeight > document.body.offsetHeight)
  }
  return node.scrollHeight > node.offsetHeight
}

class Examples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeCategory: 'viewAll',
    }
  }

  componentDidMount() {
    if (hasVerticalScroll(document.querySelector('body')) && !this.props.currentPageHasScroll) {
      this.props.handleDisableDownScrollerButton()
    }
    if (!hasVerticalScroll(document.querySelector('body')) && this.props.currentPageHasScroll) {
      this.props.handleDisableDownScrollerButton()
    }
  }

  componentDidUpdate(nextProps) {
    if (!hasVerticalScroll(document.querySelector('body')) && ((nextProps.currentPageHasScroll === true) && (this.props.currentPageHasScroll === true))) {
      this.props.handleDisableDownScrollerButton()
    }
    if (hasVerticalScroll(document.querySelector('body')) && ((nextProps.currentPageHasScroll === false) && (this.props.currentPageHasScroll === false))) {
      this.props.handleDisableDownScrollerButton()
    }
  }

  handleSetActiveCategory = activeCategory => this.setState({ activeCategory })

  handleOpenExampleModal = enlargedPhoto => this.setState(prevState => ({
    enlargedPhoto,
    isModalOpen: !prevState.isModalOpen,
  }))

  handleScrollDown = () => window.scrollTo({
    top: window.innerHeight / 2,
    behavior: 'smooth',
  })

  handleScrollBackToTop = () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  renderDownScroller = () => this.props.currentPageHasScroll && (
    <button
      id="downScroller"
      onClick={this.handleScrollDown}
      tabindex={0}
      title="Click or scroll down to see more"
    >
      ⇩
    </button>
  )

  renderCategoryButtons = () => {
    // Utility function: filter out duplicate categories
    const getCategoryList = categoriesWithDuplicates => ([
      ...new Set(categoriesWithDuplicates.map(f => f.category_id)),
    ])

    const { examples } = this.props

    return (
      <div id="examples_categories">
        <NavLink
          to="/examples"
          className="examples_categories-button"
          activeClassName="isActiveCategory"
          onClick={() => this.handleSetActiveCategory('viewAll')}
          tabindex={0}
          title="Show everything"
          exact
        >
          VIEW ALL
        </NavLink>
        {getCategoryList(examples).map((category) => (
          <NavLink
            to={`/examples/${category}`}
            className="examples_categories-button"
            activeClassName="isActiveCategory"
            onClick={() => this.handleSetActiveCategory(category)}
            tabIndex={0}
            title={`Show only ${category}`}
            key={category}
          >
            {category.toUpperCase()}
          </NavLink>
        ))}
      </div>
    )
  }

  renderMatches = (activeCategory) => {
    const { examples } = this.props

    // VIEW ALL
    if (!activeCategory) {
      return (
        <div id="examples_grid">
          {examples.map(f => (
            <NavLink
              to={`/examples/${f.category_id}/${f.feature_id}`}
              className="examples_grid_feature-button"
              onClick={() => this.props.markExampleSeen(f.feature_id)}
              key={f.feature_id}
            >
              <Tilt options={{ reverse: true, max: 15 }}>
                <div
                  className="examples_grid_feature-photo"
                  style={{ backgroundImage: `url(${f.feature_image})` }}
                >
                  <div className="examples_grid_feature-overlay">
                    <span className="examples_grid_feature-caption">
                      {f.feature_id.toUpperCase()}
                    </span>
                    <div
                      className={(f.feature_seen === true)
                        ? 'examples_grid_feature-seen'
                        : 'examples_grid_feature-unseen'}
                    >
                      <span>✓</span>
                    </div>
                  </div>
                </div>
              </Tilt>
            </NavLink>
          ))}
        </div>
      )
    }

    // ACTIVE CATEGORY
    return (
      <div id="examples_grid">
        {examples
          .filter(f => f.category_id === activeCategory)
          .map(f => (
            <NavLink
              to={`/examples/${f.category_id}/${f.feature_id}`}
              className="examples_grid_feature-button"
              onClick={() => this.props.markExampleSeen(f.feature_id)}
              key={f.feature_id}
            >
              <Tilt options={{ reverse: true, max: 15 }}>
                <div
                  className="examples_grid_feature-photo"
                  style={{ backgroundImage: `url(${f.feature_image})` }}
                >
                  <div className="examples_grid_feature-overlay">
                    <span className="examples_grid_feature-caption">
                      {f.feature_id.toUpperCase()}
                    </span>
                    <div
                      className={(f.feature_seen === true)
                        ? 'examples_grid_feature-seen'
                        : 'examples_grid_feature-unseen'}
                    >
                      <span>✓</span>
                    </div>
                  </div>
                </div>
              </Tilt>
            </NavLink>
          ))}
      </div>
    )
  }

  render() {
    const [
      , , category, project,
    ] = this.props.routing.location.pathname.split('/')
    const { currentScrollYPosition, examples } = this.props
    const { activeCategory } = this.state

    if (!project) {
      return (
        <div id="examples-wrapper">
          {(+currentScrollYPosition === 0) && this.renderDownScroller()}
          <Page
            id="examples"
            className=""
            title="Examples"
            description="Examples from Adam Mackintosh"
          >
            {this.renderCategoryButtons(category)}
            {this.renderMatches(category)}
            {(+currentScrollYPosition !== 0) && (
              <div id="examples-footer">
                <div id="examples-left">
                  <div className="nav_adamLogo" />
                  <span id="Nav_brand-adam">ADAM</span>
                  <span id="Nav_brand-mackintosh">MACKINTOSH</span>
                </div>
                <div id="examples-center">
                  <span id="examples-conclusion">△△△</span>
                </div>
                <div id="examples-right" />
              </div>
            )}

            {(+currentScrollYPosition !== 0) && (
              <button
                id="backToTopScroller"
                onClick={this.handleScrollBackToTop}
                title="Back to top?"
              >
                ⇧
              </button>
            )}
          </Page>
        </div>
      )
    }

    // IF URL CONTAINS A PROJECT, SHOW IT
    return (
      <Example
        activeCategory={activeCategory}
        category={category}
        project={examples.find(f => f.feature_id === project) || {}}
        {...this.props}
      />
    )
  }
}

Examples.propTypes = {
  routing: PropTypes.shape({ location: PropTypes.any }).isRequired,
  currentScrollYPosition: PropTypes.number.isRequired,
  currentPageHasScroll: PropTypes.bool.isRequired,
  handleDisableDownScrollerButton: PropTypes.func.isRequired,
  examples: PropTypes.arrayOf(PropTypes.any).isRequired,
  markExampleSeen: PropTypes.func.isRequired,
}

const mapStateToProps = ({ routing, nav, examples }) => ({
  routing,
  currentScrollYPosition: nav.currentScrollYPosition,
  currentPageHasScroll: nav.currentPageHasScroll,
  examples: examples.examples,
})

export default connect(mapStateToProps, {
  handleDisableDownScrollerButton, markExampleSeen,
})(Examples)

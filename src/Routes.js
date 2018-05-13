import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { TransitionGroup, Transition } from 'react-transition-group'
import matchPath from 'react-router-dom/matchPath'
import SacredGeometry from './components/SacredGeometry/SacredGeometry'
import Nav from './components/nav/Nav'
import Home from './containers/Home/Home'
import Story from './containers/Story/Story'
import Skills from './containers/Skills/Skills'
import Examples from './containers/Examples/Examples'
import Contact from './containers/Contact/Contact'
// import Asciify from './containers/asciify'
import NotFound from './containers/NotFound/NotFound'
import { handleEnterAnimation, handleExitAnimation } from './route_animations'
import './components/nav/Nav.css'

const routes = [
  {
    component: Home,
    showInMenu: false,
    key: 'home',
    path: '/',
    title: '',
    description: 'Homepage',
    tooltip: 'Click here to go home',
    exact: true,
  },
  {
    component: Story,
    showInMenu: true,
    key: 'story',
    path: '/story',
    title: '',
    description: 'This is all about my story',
    tooltip: 'See Adam\'s story',
    exact: true,
  },
  {
    component: Skills,
    showInMenu: true,
    key: 'skills',
    path: '/skills',
    title: '',
    description: 'This is all about my skills',
    tooltip: 'See Adam\'s skills',
    exact: true,
  },
  {
    component: Examples,
    showInMenu: true,
    key: 'examples',
    path: '/examples',
    title: '',
    description: 'This is all about my examples',
    tooltip: 'See Adam\'s examples',
    exact: false,
  },
  {
    component: Contact,
    showInMenu: true,
    key: 'contact',
    path: '/contact',
    title: '',
    description: 'This is all about my contact',
    tooltip: 'Start a conversation with Adam',
    exact: true,
    isContact: true,
  },
]

// Returns true if `location.pathname` matches a key in the routes collection.
const filterRoutes = location => routes.filter(({ path, strict, exact }) =>
  !!matchPath(location.pathname, { path, strict, exact }))

/**
 * The Pseudo Element is a passthrough element
 * that does not generate DOM markup.
 */
const Pseudo = ({ children }) => children

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // Generate a Menu Link if showInMenu === true
    return (
      <Pseudo>
        <SacredGeometry
          circleColor="#014420"
          dotColor="#1F2833"
          lineColor="#45A29E"
          extraStyles={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.2,
            zIndex: -1,
          }}
        />
        <Nav>
          {routes.map(({
            showInMenu, path, key, tooltip, isContact,
          }) => (
            showInMenu && (
              <NavLink
                key={`link-${key}`}
                to={path}
                className={isContact ? 'Nav_link-isContact' : 'Nav_link'}
                activeClassName="activeRoute"
                activeStyle={{ color: '#66FCF1' }}
                tabIndex={0}
                title={tooltip}
              >
                {key}
              </NavLink>
            )
          ))}
        </Nav>

        <Route
          render={({ location }) => {
            // Handle 404 with custom animations
            if (!filterRoutes(location).length) {
              return (
                <TransitionGroup appear>
                  <Transition key="404" timeout={500}>
                    <NotFound location={location} />
                  </Transition>
                </TransitionGroup>
              )
            }

            // Otherwise, observe root level path to find correct Component
            const path = `/${location.pathname.split('/')[1]}`
            return (
              <TransitionGroup
                id="router"
                appear
              >
                {filterRoutes(location).map(({ key, ...props }) => (
                  <Transition
                    key={`child-${key}`}
                    timeout={500}
                    onEnter={handleEnterAnimation}
                    onExit={handleExitAnimation}
                  >
                    {React.createElement(
                      routes.find(r => r.path === path).component,
                      { ...props, location },
                      null,
                    )}
                  </Transition>
                ))}
              </TransitionGroup>
            )
          }}
        />
      </Pseudo>
    )
  }
}

export default Routes

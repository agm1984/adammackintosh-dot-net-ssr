import React, { Component } from 'react'
import Page from '../../components/page'
import Scene from './Scene'
import UserDetails from './UserDetails/UserDetails'
import StatCluster from './StatCluster/StatCluster'
import StatBar from './StatCluster/StatBar'
import './Skills.css'

class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Page
        id="skills"
        className=""
        title="Skills"
        description="See some of Adam's skills"
      >
        <UserDetails />
        <Scene />
        <div id="skills-leftScrollZone" />
        <div id="skills-rightScrollZone" />
        <StatCluster
          id="cluster_javascript"
          category="skill ratios"
        >
          <StatBar label="JAVASCRIPT" points={90} />
          <StatBar label="REACT" points={90} />
          <StatBar label="NODE.JS" points={80} />
          <StatBar label="GIT" points={60} />
          <StatBar label="LINUX" points={70} />
          <StatBar label="DOCKER" points={35} />
          <StatBar label="GRAPHQL" points={85} />
          <StatBar label="NEO4J" points={85} />
          <StatBar label="MONGO DB" points={70} />
          <StatBar label="SQL" points={60} />
          <StatBar label="PHP" points={25} />
          <StatBar label="HTML" points={75} />
          <StatBar label="CSS" points={80} />
          <StatBar label="PHOTOSHOP" points={65} />
          <StatBar label="INDESIGN" points={75} />
          <StatBar label="THREE.JS" points={30} />
          <StatBar label="BLENDER" points={25} />
        </StatCluster>
        <a
          className="btn resumeButton"
          href="/adamMackintoshResumeApr2018.docx"
          download
        >
          DOWNLOAD RESUME
        </a>
      </Page>
    )
  }
}

export default Skills

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import SacredGeometry from '../../components/SacredGeometry/SacredGeometry'
import { markImageSeen, handleBackToExamples } from './examples_actions'

const renderTechnologiesUsed = feature_tech => (
  <div id="example_technologies-container">
    <ul className="example_technologies">
      {feature_tech.primary.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <ul className="example_technologies">
      {feature_tech.secondary.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)

const ExampleContent = (props) => {
  if (!props.project) {
    return (
      <Redirect to="/examples" />
    )
  }

  const {
    category_id,
    feature_id,
    feature_image,
    feature_URL_primary,
    feature_URL_secondary,
    feature_URL_tertiary,
    feature_summary,
    feature_tech,
    feature_images,
    feature_conclusion,
  } = props.project

  return (
    <div id="example-wrapper">
      <div id="example">

        <div id="example_line" />
        <SacredGeometry
          circleColor="#FF5043"
          dotColor="#45A29E"
          lineColor="#CCCCCC"
          extraStyles={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.2,
            zIndex: -1,
          }}
        />

        <div id="example_header">
          <div id="example_header-left">
            <h2 id="example_heading">{feature_id}</h2>
            <div id="example_links">
              {feature_URL_primary.enabled && (
                <a
                  className="example_links-link"
                  href={feature_URL_primary.url}
                  rel="noopener noreferrer"
                  title={feature_URL_primary.tooltip}
                  target="_blank"
                >
                  {feature_URL_primary.label}
                </a>
              )}
              {feature_URL_secondary.enabled && (
                <a
                  className="example_links-link"
                  href={feature_URL_secondary.url}
                  rel="noopener noreferrer"
                  title={feature_URL_secondary.tooltip}
                  target="_blank"
                >
                  {feature_URL_secondary.label}
                </a>
              )}
              {feature_URL_tertiary.enabled && (
                <a
                  className="example_links-link"
                  href={feature_URL_tertiary.url}
                  rel="noopener noreferrer"
                  title={feature_URL_tertiary.tooltip}
                  target="_blank"
                >
                  {feature_URL_tertiary.label}
                </a>
              )}
            </div>
          </div>
          <div id="example_header-right">
            <div
              className="example_header-photo"
              style={{ backgroundImage: `url(${feature_image})` }}
              title="Scroll down to see more"
            />
          </div>
        </div>

        <div className="example_content-half">
          <div className="example_content-split">
            <h3 className="example_content-subheading">summary</h3>
            <p className="example_content-paragraph">
              {feature_summary}
            </p>
          </div>
          <div className="example_content-split">
            <h3 className="example_content-subheading">technologies used</h3>
            {renderTechnologiesUsed(feature_tech)}
          </div>
        </div>

        <div className="example_content-full">
          <h3 className="example_content-subheading">additional images</h3>
          <div id="example_images">
            {feature_images.map(image => (
              <NavLink
                key={image.image_id}
                to={`/examples/${category_id}/${feature_id}/${image.image_id}`}
                className="example_image"
                onClick={() => props.markImageSeen({
                  feature_id,
                  image_id: image.image_id,
                })}
                title="Click to enlarge"
                style={{
                  backgroundImage: `url(${image.image_src})`,
                }}
              >
                <div
                  className="example_image-overlay"
                >
                  <span className="example_image-caption">
                    {image.image_caption}
                  </span>
                  <div
                    className={(image.image_seen === true)
                      ? 'example_image-seen'
                      : 'example_image-unseen'}
                  >
                    <span>✓</span>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="example_content-full">
          <h3 className="example_content-subheading">conclusion</h3>
          <p className="example_content-paragraph">
            {feature_conclusion}
          </p>
        </div>

        <div id="story-footer">
          <div id="story-left" />
          <div id="story-center">
            <span
              id="story-conclusion"
              style={{ color: '#FF5043' }}
            >
              △△△
            </span>
          </div>
          <div id="story-right" />
        </div>

        <div id="example_back-wrapper">
          <button
            id="example_back"
            onClick={() => props.handleBackToExamples()}
          >
            BACK
          </button>
        </div>
      </div>
    </div>
  )
}

ExampleContent.propTypes = {
  project: PropTypes.objectOf(PropTypes.any).isRequired,
  markImageSeen: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  handleBackToExamples: PropTypes.func.isRequired,
}

export default connect(null, {
  markImageSeen, handleBackToExamples,
})(ExampleContent)

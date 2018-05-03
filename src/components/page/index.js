import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Helmet from 'react-helmet'

const defaultUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'http://adammackintosh.net'
const defaultTitle = 'Adam Mackintosh\'s Portfolio'
const defaultDescription =
  'Welcome to Adam Mackintosh\'s Portfolio'
const defaultImage = `${defaultUrl}/adamLogo.png`
const defaultTwitter = '@agm1984'
const defaultSep = ' | '

class Page extends Component {
  getMetaTags(
    {
      title,
      description,
      image,
      contentType,
      twitter,
      noCrawl,
      published,
      updated,
      category,
      tags,
    },
    pathname,
  ) {
    const theTitle = title
      ? (title + defaultSep + defaultTitle).substring(0, 60)
      : defaultTitle
    const theDescription = description
      ? description.substring(0, 155)
      : defaultDescription
    const theImage = image ? image : defaultImage

    const metaTags = [
      { itemprop: 'name', content: theTitle },
      { itemprop: 'description', content: theDescription },
      { itemprop: 'image', content: theImage },
      { name: 'description', content: theDescription },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: defaultTwitter },
      { name: 'twitter:title', content: theTitle },
      { name: 'twitter:description', content: theDescription },
      { name: 'twitter:creator', content: twitter || defaultTwitter },
      { name: 'twitter:image:src', content: theImage },
      { property: 'og:title', content: theTitle },
      { property: 'og:type', content: contentType || 'website' },
      { property: 'og:url', content: defaultUrl + pathname },
      { property: 'og:image', content: theImage },
      { property: 'og:description', content: theDescription },
      { property: 'og:site_name', content: defaultTitle },
      { property: 'fb:app_id', content: 'xxx' }
    ]

    if (noCrawl) {
      metaTags.push({ name: 'robots', content: 'noindex, nofollow' })
    }

    if (published) {
      metaTags.push({ name: 'article:published_time', content: published })
    }
    if (updated) {
      metaTags.push({ name: 'article:modified_time', content: updated })
    }
    if (category) {
      metaTags.push({ name: 'article:section', content: category })
    }
    if (tags) {
      metaTags.push({ name: 'article:tag', content: tags })
    }

    return metaTags
  }

  render() {
    const {
      id, className, children, style, ...rest
    } = this.props
    const { pathname } = this.props.location
    const styles = {
      position: 'relative',
      ...style,
    }
    return (
      <div
        id={id}
        className={className}
        style={styles}
      >
        <Helmet
          htmlAttributes={{
            lang: 'en',
            itemscope: undefined,
            itemtype: `http://schema.org/${rest.schema || 'WebPage'}`,
          }}
          title={rest.title
            ? rest.title + defaultSep + defaultTitle
            : defaultTitle}
          link={[{
            rel: 'canonical',
            href: defaultUrl + pathname,
          }]}
          meta={this.getMetaTags(rest, pathname)}
        />
        {children}
      </div>
    )
  }
}

Page.defaultProps = {
  className: undefined,
  children: undefined,
  style: undefined,
}
Page.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
}

export default withRouter(Page)

import React from 'react'
import PropTypes from 'prop-types'

// import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  // backgroundImage,
  // large,
  className = ''
}) => {
  // if (large) className += ' PageHeader-large'
  return (
    <div >
      {title}
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader

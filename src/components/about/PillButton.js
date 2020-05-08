import React from "react"
import "./PillButton.scss"
import PropTypes from 'prop-types'

const PillButton = props => {
  const { isFilled = false, link, text } = props
  let className = isFilled
    ? "pill-button solid-background"
    : "pill-button"
  return (
    <a href={link} className={className}>
      {text}
    </a>
  )
}

PillButton.propTypes = {
  isFilled: PropTypes.bool,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default PillButton

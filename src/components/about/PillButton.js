import React from "react"
import "./about.scss"

const PillButton = props => {
  const { isFilled, link, text } = props
  let className = isFilled
    ? "pill-button about-solid-background"
    : "pill-button"
  return (
    <a href={link} className={className}>
      {text}
    </a>
  )
}
export default PillButton

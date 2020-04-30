import React from "react"
import "./about.scss"

const AboutButton = props => {
  return (
    <a href={props.link} className={props.className}>
      {props.text}
    </a>
  )
}
export default AboutButton

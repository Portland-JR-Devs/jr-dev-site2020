import React from "react"
import "./about.scss"

const AboutButton = props => {
  return <button className={props.className}>{props.text}</button>
}
export default AboutButton

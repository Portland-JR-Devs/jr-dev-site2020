import React from "react"
import "./about.scss"

const About = props => {
  return (
      <div className="outer-container">
        <div className="about-container">
          <h1 id="about-us-header">
            {props.title}
          </h1>
          <p>
            For entry level developers, people interested in starting a new
            career in tech, and anyone wanting to encourage and help newer
            developers. Join us to hear relevant speakers, have a slice of
            pizza, and make new connections! We look forward to meeting you. If
            you’d like to be a part of our Slack channel, you can be a part of
            the <a href="http://bit.ly/JrDevSlackInvite">conversation here</a>.
          </p>
          <p>
            PDX Jr. Devs is a community of developers comprised of people that
            are getting their start in tech.
          </p>
        </div>
      </div>
  )
}

export default About

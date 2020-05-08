import React from "react"
import "./About.scss"
import PillButton from "./PillButton"

const About = () => {
  return (
    <div className="about-container">
      <h2 id="about-us-header">About Us</h2>
      <p>
        For entry level developers, people interested in starting a new career
        in tech, and anyone wanting to encourage and help newer developers. Join
        us to hear relevant speakers, have a slice of pizza, and make new
        connections! We look forward to meeting you. If you’d like to be a part
        of our Slack channel, you can be a part of the conversation by clicking
        the "Join Us" button below.
      </p>
      <p>
        PDX Jr. Devs is a community of developers comprised of people that are
        getting their start in tech.
      </p>
      <div className="about-button-container">
        <PillButton text="Join Us!" link="http://bit.ly/JrDevSlackInvite" />
        <PillButton
          text="Volunteer"
          link="https://www.meetup.com/Portland-JR-DEVELOPER-Meetup/"
          isFilled={true}
        />
      </div>
    </div>
  )
}

export default About

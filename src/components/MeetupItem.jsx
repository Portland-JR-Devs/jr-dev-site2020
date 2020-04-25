import React from 'react'

export const MeetupItem = ({ meetup }) => {
    console.log(meetup)
    const { name, description, link, venue, local_date, local_time } = meetup
    return (
        <div>
            <h1>{name}</h1>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <a href={link}>Event on Meetup</a>
            <span>{venue.name}</span>
            <p>{local_time}, {local_date}</p>
        </div>
    )
}

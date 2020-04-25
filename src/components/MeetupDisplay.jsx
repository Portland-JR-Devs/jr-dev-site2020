import React, { useState, useEffect } from 'react'
import { MeetupItem } from '../components/MeetupItem';

export const MeetupDisplay = () => {
    let url = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/Portland-JR-DEVELOPER-Meetup/events?&sign=true&photo-host=public&page=20"

    const [meetups, setMeetups] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorStatus, setErrorStatus] = useState(false);

    useEffect(() => {
        fetch(url).then(response => response.json())
            .then(jsonResponse => {
                setMeetups(jsonResponse);
                setIsLoading(false);
                console.log(meetups);

            }).catch(() => {
                setIsLoading(false);
                setErrorStatus(true);
            })
    }, [])

    return (
        <div>
            {isLoading
                ? <h1>Loading...</h1>
                : errorStatus
                    ? <h1>Something went wrong!</h1>
                    : meetups.map((meetup) => {
                        return <MeetupItem key={meetup.id} meetup={meetup} />
                    })
            }

        </div>
    )
}

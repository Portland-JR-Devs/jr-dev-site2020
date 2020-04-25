import React from "react"
import { MeetupDisplay } from "./MeetupDisplay"
import { TwitterTimeline } from "./TwitterTimeline"


export const Events = () => {
    const styles = {
        header: {
            textAlign: "center",
        },
        container: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            flexWrap: "nowrap",
        },
        meetUp: {
            width: "50%",
            height: "100"

        },
        twitter: {
            width: "50%",
            height: "100"

        }
    }
    return (
        <div>
            <h2 style={styles.header}>EVENTS</h2>
            <div style={styles.container} >
                <MeetupDisplay style={styles.meetUp} />
                <TwitterTimeline style={styles.twitter} />
            </div>
        </div>
    )
}
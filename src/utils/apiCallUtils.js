import meetUpMockData from './meetup_response.json'

const  morphMeetUpData = (data) => {
    return data.map((element) => {
        const { id, name, local_date, local_time, venue, link, description } = element
        return { id, name, local_date, local_time, venue, link, description }
    })
}
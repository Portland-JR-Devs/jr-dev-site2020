export const meetupPromise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    let url = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/Portland-JR-DEVELOPER-Meetup/events?&sign=true&photo-host=public&page=20"
    request.onload = function () {
        if(this.status === 200) {
            resolve(request.resopnse);
        } else {
            reject(Error(request.statusText));
        }
    }
    request.open("GET", url, true);
    request.send();
})
import axios from 'axios';

const instance = axios.create({
    baseURL: "http://bookings.ap-southeast-1.elasticbeanstalk.com/",
})

export default instance;


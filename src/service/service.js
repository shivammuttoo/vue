
import axios from "axios";
export default class Service{
    BASE_URL = 'http://localhost:3000/'
   
    /**
    *This method gets userlist from backend 
    * @param {*} userId
    * */
    getUserJobs(userId){

        return axios.get(`${this.BASE_URL}businesses/jobs?userId=${userId}`)
    }
    /* 
    *This method gets userlist from backend 
    */
    getUserList(){
        return axios.get(`${this.BASE_URL}businesses/users`)
    }
}
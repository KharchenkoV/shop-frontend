import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";

export default class AuthService{
    static register = (username, email, password) => {
        return axios.post(API_URL + 'signup', {
            username,
            email,
            password
        })
    }

    static login = (username, password) => {
        return axios.post(API_URL + 'signin', {
            username,
            password
        }).then( response => {
            if(response.data.accessToken){
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        })
    }

    static logout = () => {
        localStorage.removeItem('user')
    }

    static getCurrentUser = () => {
        return JSON.parse(localStorage.getItem('user'))
    }
}
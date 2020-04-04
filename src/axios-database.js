import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://vue-auth-demo-babde.firebaseio.com/',
    
    baseURL: 'https://project-joke-51594.firebaseio.com/',
    headers: { 'Content-Type': 'application/json' }
});


//https://testvuejsproject.firebaseio.com/
//https://project-joke-51594.firebaseio.com/
// Add token to every request


instance.interceptors.request.use(config => {
    // header -> Authorization (Basic/Kinvey)
    config.url = `${config.url}?auth=${localStorage.getItem('token')}`;

    return config; 
});

export default instance;
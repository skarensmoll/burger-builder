import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-34f7d.firebaseio.com/'
});

export default instance;
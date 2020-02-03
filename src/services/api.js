import axios from 'axios';

const config = {
  baseURL: 'https://api.github.com',
};

if (__DEV__) {
  config.baseURL = 'http://localhost:4000';
}

export default axios.create(config);

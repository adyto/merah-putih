import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    accept: 'application/vnd.github+json',
  },
});

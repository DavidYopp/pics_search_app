import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 14378b44e0eec68f824b47f98138c989573677540bd309761975be102321936a'
  }
})

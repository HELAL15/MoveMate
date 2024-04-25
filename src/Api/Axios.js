import axios from 'axios';
// import Cookie from 'cookie-universal';
import { BaseUrl } from './api';

// cookies
// const cookie = Cookie();
// get token from cookies
// const token = cookie.get('e-commerce');

// create axios instance
export const Axios = axios.create({
  baseURL: BaseUrl,
  // headers: {
  //   Authorization: `Bearer ${token}`
  // }
});
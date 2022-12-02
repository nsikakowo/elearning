import axios from 'axios';
import { authHeader } from './auth-header';

const API_URL = 'https://tqfe-develop.herokuapp.com/ce/';

const ENDPOINTS = {
  COURSES: 'featured-course-list/',
  CATEGORY: 'category/',
};

const getCourses = () => {
  return axios.get(API_URL + ENDPOINTS.COURSES, { headers: authHeader() });
};

const getCategory = async () => {
  return await axios.get(API_URL + ENDPOINTS.CATEGORY, {
    headers: authHeader(),
  });
};

export default {
  getCategory,
  getCourses,
};

import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

// 개발 툴 자체가 타입스크립트 기반
function registerUser(userData) {
  return instance.post('signup', userData);
}
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };

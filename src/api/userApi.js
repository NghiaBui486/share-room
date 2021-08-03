import axiosClient from "./axiosClient";

const userApi = {
  getAll: (params) => {
    const url = '/user';
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/user/${id}`;
    return axiosClient.get(url);
  },

  authenticate: (params) => {
    const url = '/authenticate';
    return axiosClient.post(url, params);
  },

  register: (params) => {
    const url = '/user';
    return axiosClient.post(url, params);
  }
}

export default userApi;
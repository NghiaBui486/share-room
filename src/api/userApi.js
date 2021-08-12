import axiosClient from "./axiosClient";

const userApi = {
  getAll: () => {
    const url = "/user";
    return axiosClient.get(url);
  },

  getUser: (id) => {
    const url = `/user/${id}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  authenticate: (params) => {
    const url = "/authenticate";
    return axiosClient.post(url, params);
  },

  register: (params) => {
    const url = "/user";
    return axiosClient.post(url, params);
  },

  update: (id, params) => {
    const url = `/user/${id}`;
    return axiosClient.put(url, params, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  deleteUser: (id) => {
    const url = `/user/${id}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};

export default userApi;

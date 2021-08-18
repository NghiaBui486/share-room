import axiosClient from "./axiosClient";

const roomInfoApi = {
  createRoom: (params) => {
    const url = "/room";
    return axiosClient.post(url, params, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  getAll: () => {
    const url = '/room';
    return axiosClient.get(url, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
  },
  getInfoRoom: (id) => {
    const url = '/room/${id}';
    return axiosClient.get(url, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
  }
}
export default roomInfoApi;

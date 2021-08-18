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
};

export default roomInfoApi;

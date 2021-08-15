import axiosClient from "./axiosClient";

const addressApi = {
  getAllProvince: () => {
    const url = "/province";
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};

export default addressApi;

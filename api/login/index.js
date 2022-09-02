import { Axios, AxiosMockCreate } from "../../mocks";
import loginData from "../../mocks/login/login.json";

AxiosMockCreate.onGet("/login").reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { login: loginData }]);
    }, 2000);
  });
});

AxiosMockCreate.onPost("/login").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 2000);
  });
});

AxiosMockCreate.onDelete(/\/login\/\d+/).reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2000);
  });
});

export const loginAPI = Axios.get("/login");
export const loginDeleteAPI = (id) => Axios.delete(`/login/${id}`);
export const loginCreateAPI = (item) => Axios.post(`/login`, item);

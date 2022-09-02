import { Axios, AxiosMockCreate } from "../../mocks";

AxiosMockCreate.onGet("/basket").reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { products: [] }]);
    }, 1000);
  });
});

AxiosMockCreate.onPost("/basket").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 1000);
  });
});

AxiosMockCreate.onDelete(/\/basket\/\d+/).reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 1000);
  });
});

export const basketAPI = Axios.get("/basket");
export const basketDeleteAPI = (id) => Axios.delete(`/basket/${id}`);
export const basketCreateAPI = (item) => Axios.post(`/basket`, item);

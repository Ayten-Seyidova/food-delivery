import { Axios, AxiosMockCreate } from "../../mocks";
import productsData from "../../mocks/products/products.json";

AxiosMockCreate.onGet("/products").reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { products: productsData }]);
    }, 2000);
  });
});

AxiosMockCreate.onGet(/\/products\/\w+/).reply((config) => {
  return new Promise((resolve, reject) => {
    let name = config.url.split("/")[2];
    let filteredProducts = productsData.filter((product) => product.restaurant == name);
    setTimeout(() => {
      resolve([200, { products: filteredProducts }]);
    }, 2000);
  });
});

AxiosMockCreate.onPost("/products").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 2000);
  });
});

AxiosMockCreate.onDelete(/\/products\/\d+/).reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2000);
  });
});

export const productsAPI = Axios.get("/products");
export const productsGetAPI = (slug) => Axios.get(`/products/${slug}`);
export const productsDeleteAPI = (id) => Axios.delete(`/products/${id}`);
export const productsCreateAPI = (item) => Axios.post(`/products`, item);

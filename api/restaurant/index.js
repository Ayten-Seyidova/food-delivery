import { Axios, AxiosMockCreate } from "../../mocks";
import restaurantData from "../../mocks/restaurants/restaurants.json";

AxiosMockCreate.onGet("/restaurants").reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { restaurant: restaurantData }]);
    }, 10);
  });
});

AxiosMockCreate.onGet(/\/restaurant\/\w+/).reply((config) => {
  return new Promise((resolve, reject) => {
    let slug = config.url.split("/")[2];
    // let data;
    // switch (slug) {
    //   case "sea-food":
    //     data = "sea-food.json";
    //     break;
    //   case "chinese":
    //     data = "chinese.json";
    // }
    const filterData = restaurantData.find((rest) => rest.slug == slug);
    setTimeout(() => {
      resolve([200, { restaurant: filterData }]);
    }, 10);
  });
});

AxiosMockCreate.onPost("/restaurants").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 2000);
  });
});

AxiosMockCreate.onDelete(/\/restaurants\/\d+/).reply(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2000);
  });
});

export const restaurantAPI = Axios.get("/restaurants");
export const restaurantGetAPI = (slug) => Axios.get(`/restaurant/${slug}`);
export const restaurantDeleteAPI = (id) => Axios.delete(`/restaurants/${id}`);
export const restaurantCreateAPI = (item) => Axios.post(`/restaurants`, item);

import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { categoryAPI } from "../../../pages/api/category";
import { restaurantAPI } from "../../../pages/api/restaurant";
import {
  Card,
  CardBottom,
  CardDelivery,
  CardDescription,
  CardHeader,
  CardImg,
  CardMiddle,
  CardNewtag,
  CardTime,
  Category,
  CategoryImg,
  CategoryName,
  RestLeft,
  RestMain,
  RestRight,
} from "./RestaurantContainer.styled";

const RestaurantContainerPage = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [categories, setCategories] = useState(null);
  const page = 0;

  useEffect(() => {
    getRestaurant();
    getCategory();
  }, []);

  const getRestaurant = () => {
    restaurantAPI.then((res) => {
      setRestaurants(res.data.restaurant);
    });
  };

  const getCategory = () => {
    categoryAPI.then((res) => {
      setCategories(res.data.category);
    });
  };

  return (
    <>
      <RestMain>
        <RestLeft>
          {categories?.map((category) => {
            return (
              <Category key={category.id}>
                <CategoryImg src={category.img} alt={category.name} />
                <CategoryName>{category.name}</CategoryName>
              </Category>
            );
          })}
        </RestLeft>
        <RestRight>
          {restaurants?.map((restaurant) => (
            <Card key={restaurant.id}>
              <CardImg src={restaurant.img} alt={restaurant.name} />
              <CardMiddle>
                <CardHeader>{restaurant.name}</CardHeader>
                <CardDescription>
                  {restaurant.categories.map((category) => `${category}, `)}
                </CardDescription>
              </CardMiddle>
              <CardBottom>
                <CardDelivery>
                  {`$${restaurant.deliveryPrice} Delivery`}
                </CardDelivery>
                <CardTime>{`${restaurant.deliveryTime} Min`}</CardTime>
              </CardBottom>
              {restaurant.new && <CardNewtag>New</CardNewtag>}
            </Card>
          ))}
        </RestRight>
      </RestMain>
      <Stack spacing={5} className="mt-5">
        <Pagination count={page || 1} color="primary" />
      </Stack>
    </>
  );
};

export default RestaurantContainerPage;

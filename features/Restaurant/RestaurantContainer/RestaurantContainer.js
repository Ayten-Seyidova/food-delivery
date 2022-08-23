import { Pagination, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryAPI } from "../../../pages/api/category";
import { restaurantAPI } from "../../../pages/api/restaurant";
import { setRestaurant } from "../../../store/slice/restaurantSlice";
import { setCategory } from "../../../store/slice/categorySlice";
import { setProduct } from "../../../store/slice/productSlice";
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
import { productsAPI } from "../../../pages/api/products";

const RestaurantContainerPage = () => {
  const page = 0;

  const restaurant = useSelector((state) => state.restaurantSlice.data);
  const category = useSelector((state) => state.categorySlice.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // get restaurants
    restaurantAPI.then((res) => {
      dispatch(setRestaurant(res.data.restaurant));
    });
    // get categories
    categoryAPI.then((res) => {
      dispatch(setCategory(res.data.category));
    });
    // get products
    productsAPI.then((res) => dispatch(setProduct(res.data.products)));
  };

  const { push, query } = useRouter();

  return (
    <>
      <RestMain>
        <RestLeft>
          {category.map((category) => {
            return (
              <Category key={category.id}>
                <CategoryImg src={category.img} alt={category.name} />
                <CategoryName>{category.name}</CategoryName>
              </Category>
            );
          })}
        </RestLeft>
        <RestRight>
          {restaurant.map((restaurant) => (
            <Card
              key={restaurant.id}
              onClick={() =>
                push(`/restaurants/restaurant?name=${restaurant.slug}`)
              }
            >
              <CardImg src={restaurant.img} alt={restaurant.name} />
              <CardMiddle>
                <CardHeader>{restaurant.name}</CardHeader>
                <CardDescription>{restaurant.categories}</CardDescription>
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

import { Pagination, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
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
import SwipeableTemporaryDrawer from "./Drawer";

const RestaurantContainerPage = () => {
  const page = 0;
  const restaurant = useSelector((state) => state.restaurantSlice.data);
  const [restaurants, setRestaurants] = useState(restaurant);
  const category = useSelector((state) => state.categorySlice.data);
  const { push } = useRouter();

  const filterRest = (tag) => {
    restaurants = restaurant.filter((item) => item.category == tag);
    setRestaurants(restaurants);
  };

  return (
    <>
      <RestMain>
        <RestLeft>
          {category.map((category) => {
            return (
              <Category
                key={category.id}
                onClick={() => filterRest(category.tag)}
              >
                <CategoryImg src={category.img} alt={category.name} />
                <CategoryName>{category.name}</CategoryName>
              </Category>
            );
          })}
        </RestLeft>
        <RestRight>
          <SwipeableTemporaryDrawer
            filterRest={filterRest}
            style={{ display: "none"}}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: 15,
              gap: "5%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                onClick={() =>
                  push(`restaurants/restaurant?name=${restaurant.slug}`)
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
          </div>
        </RestRight>
      </RestMain>
      <Stack spacing={5} className="mt-5">
        <Pagination count={page || 1} color="primary" />
      </Stack>
    </>
  );
};

export async function getServerSideProps() {
  return { props: { data } };
}

export default RestaurantContainerPage;

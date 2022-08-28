import {
  BurgerImg,
  Buttons,
  ExploreButton,
  ExploreContent,
  ExploreHeader,
  ExploreImg,
  ExploreNow,
  ExploreNowContainer,
  FeaturesCard,
  FeaturesCardDescription,
  FeaturesCardHeader,
  FeaturesCardImg,
  FeaturesCards,
  FeaturesDescription,
  FeaturesHeader,
  HomeContainerMain,
  HomeFeatures,
  HomeHeader,
  HomeMenu,
  LeftHeader,
  LeftHeaderP,
  LeftHeaderP2,
  MenuContent,
  MenuHeader,
  MenuImg,
  MenuImgBack,
  MenuItem,
  MenuLeft,
  MenuRight,
  OrderButton,
  RegisterButton,
  RightHeader,
} from "./HomeContainer.styled";
import shopping from "../../../public/Image/components/shopping.svg";
import soup from "../../../public/image/components/soup.svg";
import delivery from "../../../public/image/components/delivery.svg";
import kfc from "../../../public/image/components/kfc.svg";
import pizza from "../../../public/image/components/pizza.svg";
import fries from "../../../public/image/components/fries.svg";
import burger from "../../../public/image/components/burger.svg";
import margarita from "../../../public/image/components/margarita.svg";
import burgerOpen from "../../../public/image/components/burger-open.svg";
import { useEffect } from "react";
import { restaurantAPI } from "../../../pages/api/restaurant";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../../store/slice/restaurantSlice";
import { categoryAPI } from "../../../pages/api/category";
import { setCategory } from "../../../store/slice/categorySlice";
import { productsAPI } from "../../../pages/api/products";
import { setProduct } from "../../../store/slice/productSlice";
import { useRouter } from "next/router";

const HomeContainerPage = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    restaurantAPI.then((res) => {
      dispatch(setRestaurant(res.data.restaurant));
    });
    categoryAPI.then((res) => {
      dispatch(setCategory(res.data.category));
    });
    productsAPI.then((res) => dispatch(setProduct(res.data.products)));
  };

  return (
    <HomeContainerMain>
      <HomeHeader>
        <LeftHeader>
          <LeftHeaderP>
            Our Food site makes it easy to find local food
          </LeftHeaderP>
          <LeftHeaderP2>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </LeftHeaderP2>
          <Buttons>
            <RegisterButton onClick={() => push("/login")}>
              Register
            </RegisterButton>
            <OrderButton onClick={() => push("/restaurants")}>
              Order Now
            </OrderButton>
          </Buttons>
        </LeftHeader>
        <RightHeader>
          <BurgerImg src="https://raw.githubusercontent.com/rahimlisarkhan/food-delivery/main/public/image/sendvic.png" />
        </RightHeader>
      </HomeHeader>
      <HomeFeatures>
        <FeaturesHeader>Features</FeaturesHeader>
        <FeaturesDescription>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </FeaturesDescription>
        <FeaturesCards>
          <FeaturesCard>
            <FeaturesCardImg src={shopping} />
            <FeaturesCardHeader>Discount Boucher</FeaturesCardHeader>
            <FeaturesCardDescription>
              Lorem ipsum is placeholder commonly used in the graphic
            </FeaturesCardDescription>
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesCardImg src={soup} />
            <FeaturesCardHeader>Fresh healthy Food</FeaturesCardHeader>
            <FeaturesCardDescription>
              Lorem ipsum is placeholder commonly used in the graphic
            </FeaturesCardDescription>
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesCardImg src={delivery} />
            <FeaturesCardHeader>Fast Home Delivery</FeaturesCardHeader>
            <FeaturesCardDescription>
              Lorem ipsum is placeholder commonly used in the graphic
            </FeaturesCardDescription>
          </FeaturesCard>
        </FeaturesCards>
      </HomeFeatures>
      <HomeMenu>
        <MenuItem>
          <MenuLeft>
            <MenuHeader>Menu That Always Make You Fall In Love</MenuHeader>
            <MenuContent>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </MenuContent>
          </MenuLeft>
          <MenuRight>
            <MenuImgBack></MenuImgBack>
            <MenuImg src={kfc} />
          </MenuRight>
        </MenuItem>
        <MenuItem>
          <MenuRight>
            <MenuImgBack></MenuImgBack>
            <MenuImg src={pizza} />
          </MenuRight>
          <MenuLeft>
            <MenuHeader>Yummy Always Papa John’s Pizza.Agree?</MenuHeader>
            <MenuContent>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </MenuContent>
          </MenuLeft>
        </MenuItem>
        <MenuItem>
          <MenuLeft>
            <MenuHeader>Do You Like French Fries? Mmm...</MenuHeader>
            <MenuContent>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </MenuContent>
          </MenuLeft>
          <MenuRight>
            <MenuImgBack></MenuImgBack>
            <MenuImg src={fries} />
          </MenuRight>
        </MenuItem>
      </HomeMenu>
      <HomeFeatures>
        <FeaturesHeader>Our Popular Update New Foods</FeaturesHeader>
        <FeaturesDescription>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </FeaturesDescription>
        <FeaturesCards>
          <FeaturesCard>
            <FeaturesCardImg src={burger} />
            <FeaturesCardHeader>Dubble Chees</FeaturesCardHeader>
            <FeaturesCardDescription>
              Lorem ipsum is placeholder commonly used in the graphic
            </FeaturesCardDescription>
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesCardImg src={margarita} />
            <FeaturesCardHeader>Margarita</FeaturesCardHeader>
            <FeaturesCardDescription>
              Lorem ipsum is placeholder commonly used in the graphic
            </FeaturesCardDescription>
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesCardImg src={kfc} />
            <FeaturesCardHeader>Twister Menu</FeaturesCardHeader>
            <FeaturesCardDescription>
              Lorem ipsum is placeholder commonly used in the graphic
            </FeaturesCardDescription>
          </FeaturesCard>
        </FeaturesCards>
      </HomeFeatures>
      <ExploreNowContainer>
        <ExploreNow>
          <ExploreImg src={pizza} />
          <ExploreContent>
            <ExploreHeader>Discover Restaurants Near From you</ExploreHeader>
            <ExploreButton>Explore now</ExploreButton>
          </ExploreContent>
          <ExploreImg src={burgerOpen} />
        </ExploreNow>
      </ExploreNowContainer>
    </HomeContainerMain>
  );
};

export default HomeContainerPage;

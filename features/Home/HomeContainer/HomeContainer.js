import {
  BurgerBackground,
  BurgerCard,
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
  HomeHeaderMobile,
  HomeMenu,
  LeftHeader,
  LeftHeaderP,
  LeftHeaderP2,
  MenuContent,
  MenuContentReverse,
  MenuHeader,
  MenuHeaderReverse,
  MenuImg,
  MenuImgBack,
  MenuItem,
  MenuItemReverse,
  MenuLeft,
  MenuLeftReverse,
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
import pizzaCard from "../../../public/image/components/pizza-card.svg";
import friesCard from "../../../public/image/components/fries-card.svg";
import burgerCard from "../../../public/image/components/cheeseburger-card.svg";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const HomeContainerPage = () => {
  const { t } = useTranslation();
  const { push } = useRouter();

  return (
    <HomeContainerMain>
      <HomeHeaderMobile>
        <BurgerImg
          style={{
            width: 271,
            height: 231,
            position: "relative",
            marginTop: 0,
          }}
          src="https://raw.githubusercontent.com/rahimlisarkhan/food-delivery/main/public/image/sendvic.png"
        />
        <LeftHeaderP
          style={{
            width: "85%",
            fontSize: 20,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Our Food site makes it easy to find local food
        </LeftHeaderP>
        <Buttons style={{ marginTop: 20, flexDirection: "column", gap: 10 }}>
          <RegisterButton
            onClick={() => push("/login")}
            style={{ fontSize: 16, width: 168, height: 40 }}
          >
            {t("register")}
          </RegisterButton>
          <OrderButton
            onClick={() => push("/restaurants")}
            style={{ fontSize: 16, width: 168, height: 40 }}
          >
            {t("order_now")}
          </OrderButton>
        </Buttons>
      </HomeHeaderMobile>
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
              {t("register")}
            </RegisterButton>
            <OrderButton onClick={() => push("/restaurants")}>
              {t("order_now")}
            </OrderButton>
          </Buttons>
        </LeftHeader>
        <RightHeader>
          <BurgerBackground />
          <BurgerImg src="https://raw.githubusercontent.com/rahimlisarkhan/food-delivery/main/public/image/sendvic.png" />
          <BurgerCard>
            <img src={pizzaCard} />
            <p
              style={{
                width: 90,
                fontWeight: 500,
                fontSize: 16,
                color: "#4f4f4f",
              }}
            >
              Pizza Hut Yummy ...
            </p>
          </BurgerCard>
          <BurgerCard style={{ top: "50%", right: "70%" }}>
            <img src={friesCard} />
            <p
              style={{
                width: 120,
                fontWeight: 500,
                fontSize: 16,
                color: "#4f4f4f",
              }}
            >
              French Fries Yummy ...
            </p>
          </BurgerCard>
          <BurgerCard style={{ top: "90%", right: "7%" }}>
            <img src={burgerCard} />
            <p
              style={{
                width: 90,
                fontWeight: 500,
                fontSize: 16,
                color: "#4f4f4f",
              }}
            >
              CheeseBurger Yummy ...
            </p>
          </BurgerCard>
        </RightHeader>
      </HomeHeader>
      <HomeFeatures>
        <FeaturesHeader>{t("features")}</FeaturesHeader>
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
            <MenuImgBack />
            <MenuImg src={kfc} />
          </MenuRight>
        </MenuItem>
        <MenuItemReverse>
          <MenuRight>
            <MenuImgBack style={{ transform: "rotate(-22.82deg)" }} />
            <MenuImg src={pizza} />
          </MenuRight>
          <MenuLeftReverse>
            <MenuHeaderReverse>
              Yummy Always Papa John’s Pizza.Agree?
            </MenuHeaderReverse>
            <MenuContentReverse>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </MenuContentReverse>
          </MenuLeftReverse>
        </MenuItemReverse>
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
            <MenuImgBack />
            <MenuImg src={fries} />
          </MenuRight>
        </MenuItem>
      </HomeMenu>
      <HomeFeatures style={{ marginTop: 70 }}>
        <FeaturesHeader>{t("our popular")}</FeaturesHeader>
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
          <ExploreImg src={pizza} alt="pizza" />
          <ExploreContent>
            <ExploreHeader>Discover Restaurants Near From you</ExploreHeader>
            <ExploreButton onClick={() => push("/restaurants")}>
              Explore now
            </ExploreButton>
          </ExploreContent>
          <ExploreImg src={burgerOpen} alt="burger" />
        </ExploreNow>
      </ExploreNowContainer>
    </HomeContainerMain>
  );
};

export default HomeContainerPage;

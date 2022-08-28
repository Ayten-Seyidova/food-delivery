import { Options, UserContainer, Option } from "./User.styled";
import { IoBasketOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const UserContainerPage = (props) => {
  const router = useRouter();
  return (
    <UserContainer>
      <Options>
        <Option onClick={() => router.push("/user?page=profile")}>
          <IoBasketOutline size={24} />
          Profile
        </Option>
        <Option onClick={() => router.push("/user?page=basket")}>
          Your Basket
        </Option>
        <Option onClick={() => router.push("/user?page=orders")}>
          Your Orders
        </Option>
        <Option onClick={() => router.push("/user?page=checkout")}>
          Checkout
        </Option>
        <Option onClick={() => router.push("/user?page=logout")}>Logout</Option>
      </Options>
      {props.component}
    </UserContainer>
  );
};

export default UserContainerPage;

import { Options, UserContainer, UserProfile, Option } from "./User.styled";
import { IoBasketOutline } from "react-icons/io5";

const UserContainerPage = () => {
  return (
    <UserContainer>
      <Options>
        <Option>
          <IoBasketOutline size={24}/>
          Profile
        </Option>
        <Option>Your Basket</Option>
        <Option>Your Orders</Option>
        <Option>Checkout</Option>
        <Option>Logout</Option>
      </Options>
      <UserProfile>wefewf</UserProfile>
    </UserContainer>
  );
};

export default UserContainerPage;

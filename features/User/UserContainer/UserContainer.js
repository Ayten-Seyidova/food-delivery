import { Options, UserContainer, Option } from "./User.styled";
import { IoBasketOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayments, MdLogout } from "react-icons/md";
import { useRouter } from "next/router";

const UserContainerPage = (props) => {
  const router = useRouter();
  return (
    <UserContainer>
      <Options>
        <Option onClick={() => router.push("/user?page=profile")}>
          <CgProfile size={24} />
          Profile
        </Option>
        <Option onClick={() => router.push("/user?page=basket")}>
          <IoBasketOutline size={24} />
          Your Basket
        </Option>
        <Option onClick={() => router.push("/user?page=orders")}>
          <TbTruckDelivery size={24} />
          Your Orders
        </Option>
        <Option onClick={() => router.push("/user?page=checkout")}>
          <MdPayments size={24} />
          Checkout
        </Option>
        <Option onClick={() => router.push("/user?page=logout")}>
          <MdLogout size={24} />
          Logout
        </Option>
      </Options>
      {props.component}
    </UserContainer>
  );
};

export default UserContainerPage;

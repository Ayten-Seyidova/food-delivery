import { OrdersDiv } from "./OrdersContainer.styled";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Delivery Address</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Payment Method</TableCell>
            <TableCell align="right">Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.orders.map((order) => (
            <TableRow
              key={order.orderId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.orderId}
              </TableCell>
              <TableCell align="right">{order.orderDate}</TableCell>
              <TableCell align="right">{order.address}</TableCell>
              <TableCell align="right">${order.amount}</TableCell>
              <TableCell align="right">{order.payment}</TableCell>
              <TableCell align="right">{order.contact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const OrdersContainer = () => {
  const orders = useSelector((state) => state.basketSlice.orders);
  return (
    <OrdersDiv>
      <h1 style={{ fontWeight: 600, fontSize: 30, color: "#4F4F4F" }}>
        Your Orders
      </h1>
      <BasicTable orders={orders} />
    </OrdersDiv>
  );
};

export default OrdersContainer;

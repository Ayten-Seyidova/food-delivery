import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Filters } from "./RestaurantContainer.styled";
import { BsFilter } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function SwipeableTemporaryDrawer({ filterRest, categories }) {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div style={{ textAlign: "center", color: "#bdbdbd" }}>
          <AiOutlineCloseCircle size={40} />
        </div>
        {categories.map((text) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text.name}
                style={{ paddingLeft: 20 }}
                onClick={() => filterRest(text.tag)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Filters onClick={toggleDrawer(anchor, true)}>
            <BsFilter size={25} />
            &nbsp;Filters
          </Filters>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

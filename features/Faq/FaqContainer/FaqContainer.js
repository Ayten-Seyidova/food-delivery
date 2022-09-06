import { FaqContainer, Header } from "./FaqContainer.styled";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { restaurantAPI } from "../../../api/restaurant";

const SimpleAccordion = () => {
  return (
    <div style={{ width: "75%" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How to contact with Customer Service?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "#828282" }}>
            Our Customer Experience Team is available 7 days a week and we offer
            2 ways to get in contact.Email and Chat . We try to reply quickly,
            so you need not to wait too long for a response!.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            App installation failed, how to update system information?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "#828282" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Website reponse taking time, how to improve?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "#828282" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I create a account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "#828282" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Website reponse taking time, how to improve?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "#828282" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const FaqContainerPage = () => {
  return (
    <>
      <FaqContainer>
        <Header>F.A.Q</Header>
        <SimpleAccordion />
      </FaqContainer>
    </>
  );
};

export default FaqContainerPage;

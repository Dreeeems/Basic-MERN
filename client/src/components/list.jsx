import { Box, ListItem, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";
import useWebSocket from "../ws/ws";

const ListComponent = (props) => {
  const item = props.item;
  console.log(item);
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      alignItems="flex-start"
      bgcolor={"#F7F7F7"}
      padding={2}
      width={"100%"}
    >
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: 1,
            borderBottomColor: "#BBBBBB",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: item.available ? "green" : "red",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />

          <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
            {item._id}
          </Typography>
          <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
            {item.type}
          </Typography>
          <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
            {item.rating}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 3,
            paddingLeft: 6,
          }}
        >
          <Stack component={"div"} sx={{ display: "flex", direction: "row" }}>
            <Typography
              variant="span"
              sx={{ flexGrow: 1, textAlign: "left", marginBottom: 2 }}
            >
              Id
            </Typography>
            <Typography variant="span" sx={{ flexGrow: 1, textAlign: "left" }}>
              {item._id}
            </Typography>
          </Stack>
          <Stack component={"div"} sx={{ display: "flex", direction: "row" }}>
            <Typography
              variant="span"
              sx={{ flexGrow: 1, textAlign: "left", marginBottom: 2 }}
            >
              Name
            </Typography>
            <Typography variant="span" sx={{ flexGrow: 1, textAlign: "left" }}>
              {item.name}
            </Typography>
          </Stack>
          <Stack component={"div"} sx={{ display: "flex", direction: "row" }}>
            <Typography
              variant="span"
              sx={{ flexGrow: 1, textAlign: "left", marginBottom: 2 }}
            >
              Type
            </Typography>
            <Typography variant="span" sx={{ flexGrow: 1, textAlign: "left" }}>
              {item.type}
            </Typography>
          </Stack>
          <Stack
            component={"div"}
            sx={{ display: "flex", direction: "row", marginBottom: 2 }}
          >
            <Typography variant="span" sx={{ flexGrow: 1, textAlign: "left" }}>
              Warranty
            </Typography>
            <Typography
              variant="span"
              sx={{ flexGrow: 1, textAlign: "left", marginBottom: 2 }}
            >
              {item.warranty}
            </Typography>
          </Stack>
          <Stack component={"div"} sx={{ display: "flex", direction: "row" }}>
            <Typography
              variant="span"
              sx={{ flexGrow: 1, textAlign: "left", marginBottom: 2 }}
            >
              Rating
            </Typography>
            <Typography variant="span" sx={{ flexGrow: 1, textAlign: "left" }}>
              {item.rating}
            </Typography>
          </Stack>
          <Stack component={"div"} sx={{ display: "flex", direction: "row" }}>
            <Typography
              variant="span"
              sx={{ flexGrow: 1, textAlign: "left", marginBottom: 2 }}
            >
              Price
            </Typography>
            <Typography variant="span" sx={{ flexGrow: 1, textAlign: "left" }}>
              {item.price}
            </Typography>
          </Stack>
          <Stack component={"div"} sx={{ display: "flex", direction: "row" }}>
            <Typography
              variant="span"
              sx={{ flexGrow: 1, textAlign: "left", marginBottom: 2 }}
            >
              available
            </Typography>
            <Typography variant="span" sx={{ flexGrow: 1, textAlign: "left" }}>
              {item.available}
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default ListComponent;

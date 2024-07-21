import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Link } from "react-router-dom";

const ListComponent = (props) => {
  const item = props.item;

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="flex-start"
      bgcolor={"#FFFFFF"}
      borderRadius={2}
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
            overflowX: "auto",
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
          <Typography
            sx={{
              flexGrow: 1,
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: { xs: "none", md: "block" },
            }}
          >
            {item._id}
          </Typography>

          <Typography
            sx={{
              flexGrow: 1,
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: { xs: "block", md: "none" },
            }}
          >
            {item._id.slice(0, 5)}...
          </Typography>
          <Typography
            sx={{
              flexGrow: 1,
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: { xs: "none", md: "block" },
            }}
          >
            {item.type}
          </Typography>
          <Typography
            sx={{
              flexGrow: 1,
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: { xs: "none", md: "block" },
            }}
          >
            {item.rating}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 3,
            paddingLeft: 6,
            overflowX: "hidden",
            width: "100%",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Stack>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  Id
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  {item._id}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  Name
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  {item.name}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  Type
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  {item.type}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  Warranty
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  {item.warranty_years} years
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  Rating
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  {item.rating}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  Price
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  {item.price}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  Available
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  {item.available ? "Yes" : "No"}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack marginTop={2} direction="row" spacing={2}>
                <Link to={`/edit/${item._id}`}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FFA500",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#FFA450",
                      },
                    }}
                  >
                    Edit
                  </Button>
                </Link>
                <Link to={`/delete/${item._id}`}>
                  <Button variant="contained" color="error">
                    Delete
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default ListComponent;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Container, List, Stack, Typography } from "@mui/material";
import ListComponent from "../components/list";
import useWebSocket from "../ws/ws";
import { filterData, SearchBar } from "../components/searchBar";
import Info from "../components/info";
import { ControlPoint } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { message } = useWebSocket("ws://localhost:3010");
  const dataFiltered = filterData(searchQuery, message);

  return (
    <Container
      component="div"
      sx={{ padding: 5, bgcolor: "#F4F4F4", overflow: "hidden" }}
    >
      <Stack
        sx={{
          display: "flex",
          width: "100%",
          overflow: "hidden",
          marginBottom: 2,
        }}
      >
        {dataFiltered !== null ? (
          <Info item={dataFiltered} />
        ) : (
          <Typography variant="body1" sx={{ padding: 2 }}>
            No products available
          </Typography>
        )}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Stack>
      <Stack spacing={2}>
        <Box sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: 6,
              paddingBottom: 1,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
              }}
            />
            <Typography sx={{ flexGrow: 3, textAlign: "center" }}>
              Id
            </Typography>
            <Typography sx={{ flexGrow: 3, textAlign: "center" }}>
              Type
            </Typography>
            <Typography sx={{ flexGrow: 3, textAlign: "center" }}>
              Rating
            </Typography>
            <Typography sx={{ flexGrow: 3, textAlign: "center" }}>
              <Link to="/add">
                <Button>
                  <ControlPoint fontSize="large" sx={{ cursor: "pointer" }} />
                </Button>
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              maxHeight: "50vh",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                bgcolor: "#FFFFFF",
              }}
            >
              {dataFiltered !== null ? (
                dataFiltered.map((item) => (
                  <ListComponent key={item._id} item={item} />
                ))
              ) : (
                <Typography variant="body1" sx={{ padding: 2 }}>
                  No products available
                </Typography>
              )}
            </List>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;

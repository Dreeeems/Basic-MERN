import React from "react";
import Box from "@mui/material/Box";
import { List, Stack, Typography } from "@mui/material";
import { datas } from "../util/data";
import ListComponent from "../components/list";
import useWebSocket from "../ws/ws";

const Home = () => {
  const { message, isConnected } = useWebSocket("ws://localhost:3000");
  return (
    <Box component="div" sx={{ padding: 5, bgcolor: "#FFFFFF" }}>
      <Stack spacing={2}>
        <List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: 6,
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
          </Box>
          {message !== null ? (
            message.map((item) => <ListComponent key={item._id} item={item} />)
          ) : (
            <Typography variant="body1" sx={{ padding: 2 }}>
              No products available
            </Typography>
          )}
        </List>
      </Stack>
    </Box>
  );
};

export default Home;

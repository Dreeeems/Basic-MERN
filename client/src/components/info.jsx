import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { CollectionsBookmark } from "@mui/icons-material";
const Info = ({ item }) => {
  const lastItem = item.length > 0 ? { ...item[item.length - 1] } : null;

  if (!lastItem) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          marginBottom: 2,
          padding: 2,
          gap: 2,
        }}
      >
        <Typography variant="body1">No items available</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-around",
        marginBottom: 2,
        padding: 2,
        gap: 2,
      }}
    >
      <Stack
        sx={{
          padding: 2,
          bgcolor: "#FFFFFF",
          borderRadius: 2,
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            direction: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <CollectionsBookmark
            sx={{ bgcolor: "red", color: "white", borderRadius: "50%", p: 0.5 }}
          />
          <Typography variant="h6">Last Added Item</Typography>
        </Box>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {lastItem.name}
        </Typography>
      </Stack>

      <Stack
        sx={{
          padding: 2,
          bgcolor: "#FFFFFF",
          borderRadius: 2,
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <CollectionsBookmark
            sx={{ bgcolor: "red", color: "white", borderRadius: "50%", p: 0.5 }}
          />
          <Typography variant="h6" sx={{ alignItems: "center" }}>
            Items count
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {item.length - 1}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Info;

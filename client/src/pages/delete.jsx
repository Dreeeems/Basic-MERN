import {
  Box,
  Stack,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { TaskAlt, Clear } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteFromApi, fetchFromApiItem } from "../util/fetchFromApi";
import useAlert from "../hook/useAlert";

const Delete = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const navigate = useNavigate();
  const { id } = useParams();
  const [getItem, setGetItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDelete = async () => {
    try {
      await deleteFromApi(id);
      showAlert({
        show: true,
        text: "Item deleted successfully!",
        type: "success",
      });
      setTimeout(() => {
        hideAlert();
        navigate("/");
      }, 3000);
    } catch (error) {
      showAlert({
        show: true,
        text: `Failed to delete item! Error : ${error}`,
        type: "danger",
      });
      setTimeout(() => {
        hideAlert();
      }, 3000);
    }
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await fetchFromApiItem(id);
        setGetItem(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Failed to fetch item", error);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <Box component="div" sx={{ bgcolor: "#f2f3f7" }}>
      {alert.show && (
        <Alert
          severity={alert.type === "danger" ? "error" : "success"}
          sx={{ mb: 2 }}
        >
          {alert.text}
        </Alert>
      )}

      <Box
        component="div"
        sx={{
          padding: { xs: 2, md: 5 },
          bgcolor: "#f2f3f7",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            bgcolor: "#FFFFFF",
            borderRadius: 2,
            boxShadow: 3,
            p: { xs: 3, md: 5 },
          }}
        >
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Stack spacing={3}>
              <Typography variant="h5" align="center" gutterBottom>
                Delete Product
              </Typography>

              <Box
                sx={{
                  p: 2,
                  bgcolor: "#f8f9fa",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">{getItem.name}</Typography>
              </Box>

              <Stack direction="row" spacing={2} justifyContent="space-around">
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2" color="textSecondary">
                    Price
                  </Typography>
                  <Typography variant="body1">{getItem.price} €</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2" color="textSecondary">
                    Warranty
                  </Typography>
                  <Typography variant="body1">
                    {getItem.warranty_years} year(s)
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2" color="textSecondary">
                    Type
                  </Typography>
                  <Typography variant="body1">{getItem.type}</Typography>
                </Box>

                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2" color="textSecondary">
                    Note
                  </Typography>
                  <Typography variant="body1">{getItem.rating}</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2" color="textSecondary">
                    Available
                  </Typography>
                  {getItem.available ? (
                    <Box
                      padding={2}
                      borderRadius={2}
                      bgcolor={"green"}
                      display="flex"
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <TaskAlt style={{ color: "#fff", width: "100%" }} />
                    </Box>
                  ) : (
                    <Box padding={1} borderRadius={2} bgcolor={"red"}>
                      <Clear style={{ color: "#fff", width: "100%" }} />
                    </Box>
                  )}
                </Box>
              </Stack>

              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ mr: 2 }}
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Link to="/">
                  <Button variant="outlined" color="primary">
                    Cancel
                  </Button>
                </Link>
              </Box>
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Delete;

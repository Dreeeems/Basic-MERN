import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  Alert as Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { fetchFromApiItem, updateFromApi } from "../util/fetchFromApi";
import useAlert from "../hook/useAlert";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [getItem, setGetItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    rating: "",
    type: "",
    warranty_years: "",
    available: true,
  });
  const { alert, showAlert, hideAlert } = useAlert();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await fetchFromApiItem(id);
        setGetItem(data);
        setFormData({
          name: data.name,
          price: data.price,
          rating: data.rating,
          type: data.type,
          warranty_years: data.warranty_years,
          available: data.available,
        });
      } catch (error) {
        console.error("Failed to fetch item", error);
      }
    };

    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      updateFromApi(id, formData);
      showAlert({
        show: true,
        text: "Item edited successfully!",
        type: "success",
      });
      setTimeout(() => {
        hideAlert();
        navigate("/");
      }, 3000);
    } catch (error) {
      showAlert({
        show: true,
        text: `Failed to edit item! Error : ${error}`,
        type: "danger",
      });
      setTimeout(() => {
        hideAlert();
      }, 3000);
    }
  };

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
            width: { xs: "100%", md: "60%", lg: "50%" },
            bgcolor: "#FFFFFF",
            borderRadius: 2,
            boxShadow: 3,
            p: { xs: 3, md: 5 },
          }}
        >
          {getItem ? (
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Typography variant="h5" align="center" gutterBottom>
                  Edit Product
                </Typography>

                <Stack spacing={2}>
                  <TextField
                    label="Product Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    helperText="Enter the product name"
                  />

                  <TextField
                    label="Price"
                    variant="outlined"
                    fullWidth
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    helperText="Enter the product price"
                  />

                  <TextField
                    label="Product Rating"
                    variant="outlined"
                    fullWidth
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    helperText="Enter the product rating"
                  />

                  <TextField
                    label="Product Type"
                    variant="outlined"
                    fullWidth
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    helperText="Enter the product type"
                  />

                  <TextField
                    label="Product Warranty Years"
                    variant="outlined"
                    fullWidth
                    name="warranty_years"
                    value={formData.warranty_years}
                    onChange={handleChange}
                    helperText="Enter the warranty period in years"
                  />

                  <FormControl component="fieldset">
                    <Typography variant="subtitle1">Available</Typography>
                    <RadioGroup
                      name="available"
                      value={formData.available}
                      onChange={handleChange}
                      row
                    >
                      <FormControlLabel
                        value={true}
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Stack>

                <Box sx={{ textAlign: "center", mt: 4 }}>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ mr: 2 }}
                    type="submit"
                  >
                    Edit
                  </Button>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color="primary">
                      Cancel
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </form>
          ) : (
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
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Edit;

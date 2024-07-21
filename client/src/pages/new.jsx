import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addFromApi } from "../util/fetchFromApi";
import useAlert from "../hook/useAlert";

const New = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    rating: "",
    type: "",
    warranty_years: "",
    available: null,
  });

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
      if (formData.available !== null) {
        addFromApi(formData);
        showAlert({
          show: true,
          text: "Item created successfully!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          navigate("/");
        }, 3000);
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
      showAlert({
        show: true,
        text: `Failed to create item! Error : ${error}`,
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
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Typography variant="h5" align="center" gutterBottom>
                Create Product
              </Typography>

              <Stack spacing={2}>
                <TextField
                  label="Product Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  required
                  onChange={handleChange}
                  helperText={"Enter the product name"}
                />

                <TextField
                  label="Price"
                  variant="outlined"
                  fullWidth
                  name="price"
                  required
                  type="number"
                  inputProps={{ step: "0.01" }}
                  onChange={handleChange}
                  helperText={"Enter the product price"}
                />

                <TextField
                  label="Product Rating"
                  variant="outlined"
                  fullWidth
                  name="rating"
                  required
                  type="number"
                  inputProps={{ step: "0.1", min: "0.1", max: "5" }}
                  onChange={handleChange}
                  helperText={"Enter the product rating"}
                />

                <TextField
                  label="Product Type"
                  variant="outlined"
                  fullWidth
                  name="type"
                  onChange={handleChange}
                  helperText="Enter the product type"
                />

                <TextField
                  label="Product Warranty Years"
                  variant="outlined"
                  fullWidth
                  name="warranty_years"
                  required
                  type="number"
                  inputProps={{ step: "1" }}
                  onChange={handleChange}
                  helperText={"Enter the warranty period in years"}
                />

                <FormControl component="fieldset">
                  <Typography variant="subtitle1">Available</Typography>
                  <RadioGroup name="available" onChange={handleChange} row>
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="Yes"
                      checked={formData.available === "true"}
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="No"
                      checked={formData.available === "false"}
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
                  Create
                </Button>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button variant="outlined" color="primary">
                    Cancel
                  </Button>
                </Link>
              </Box>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default New;

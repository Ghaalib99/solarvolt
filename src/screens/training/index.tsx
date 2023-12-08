"use client";
import React, { useState } from "react";
import { Edit, Save } from "@mui/icons-material";
import {
  Typography,
  Box,
  Avatar,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Chip,
  Container,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Appbar from "@/components/appbar";
import { Agent } from "http";
import { db } from "@/firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createTrainee,
  getTrainees,
  updateTrainee,
} from "@/firebase/firestore/traineeFireStore";
import { TraineeProps } from "@/types/trainee";

const Training = () => {
  const [trainees, setTrainees] = useState<TraineeProps[]>([]);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    city: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    occupation: "",
    income: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChanges = async () => {
    try {
      const newTraineeId = await createTrainee(formData);
      console.log("New trainee created with ID:", newTraineeId);
      successMessage();
      // Optionally, you can fetch the updated list of trainees
      const updatedTrainees: TraineeProps[] = await getTrainees();
      setTrainees(updatedTrainees);

      // Clear the form data
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        city: "",
        dateOfBirth: "",
        gender: "",
        address: "",
        occupation: "",
        income: "",
      });
    } catch (error) {
      console.error("Error creating trainee: ", error);
      errorMessage2();
    }
  };

  const errorMessage1 = () => {
    toast.success("Please fill in all required fields.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const errorMessage2 = () => {
    toast.success("An error occured. Please try again later", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const successMessage = () => {
    toast.success("Form submitted successfully.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Box>
      <Appbar color="primary.main" />
      <Container>
        <Box sx={{ pb: "100px", mt: 10 }}>
          <Box sx={{ width: { xs: 1, md: 0.5 }, marginX: "auto" }}>
            <Box
              sx={{
                mb: 2,
                alignItems: "center",
              }}
            >
              <Typography variant="h4" mb={2}>
                Training
              </Typography>
              <Typography variant="body2" mb={4}>
                To take part in our training, kindly complete the form below:
              </Typography>
            </Box>

            <Box
              sx={{
                mb: { xs: 3, md: 0 },
                width: 1,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ width: { xs: 1, md: 0.45 }, mb: 3 }}>
                <TextField
                  id="outlined-disabled"
                  label="First Name"
                  name="firstname"
                  value={formData.firstname}
                  defaultValue={formData.firstname}
                  onChange={handleInputChange}
                  sx={{
                    width: 1,

                    "& .mui-6k9065-MuiOutlinedInput-notchedOutline": {
                      border: "1px solid",
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: { xs: 1, md: 0.45 } }}>
                <TextField
                  id="outlined-disabled"
                  label="last Name"
                  name="lastname"
                  value={formData.lastname}
                  defaultValue={formData.lastname}
                  onChange={handleInputChange}
                  sx={{
                    width: 1,
                    "& .mui-6k9065-MuiOutlinedInput-notchedOutline": {
                      border: "1px solid",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box mb={3}>
              <TextField
                id="outlined-disabled"
                label="Email"
                name="email"
                value={formData.email}
                defaultValue={formData.email}
                onChange={handleInputChange}
                sx={{
                  width: 1,
                  "& .mui-6k9065-MuiOutlinedInput-notchedOutline": {
                    border: "1px solid",
                  },
                }}
              />
            </Box>
            <Box mb={3}>
              <TextField
                id="outlined-disabled"
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                defaultValue={formData.phoneNumber}
                onChange={handleInputChange}
                sx={{
                  width: 1,
                  "& .mui-6k9065-MuiOutlinedInput-notchedOutline": {
                    border: "1px solid",
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                mb: { xs: 3, md: 0 },
                width: 1,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ width: { xs: 1, md: 0.45 }, mb: 3 }}>
                <TextField
                  id="outlined-disabled"
                  label="Occupation"
                  name="occupation"
                  value={formData.occupation}
                  defaultValue={formData.occupation}
                  onChange={handleInputChange}
                  sx={{
                    width: 1,

                    "& .mui-6k9065-MuiOutlinedInput-notchedOutline": {
                      border: "1px solid",
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: { xs: 1, md: 0.45 } }}>
                <TextField
                  id="outlined-disabled"
                  label="Income (p/a)"
                  name="income"
                  value={formData.income}
                  defaultValue={formData.income}
                  onChange={handleInputChange}
                  sx={{
                    width: 1,
                    "& .mui-6k9065-MuiOutlinedInput-notchedOutline": {
                      border: "1px solid",
                    },
                  }}
                />
              </Box>
            </Box>

            <Box
              mb={3}
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ width: { xs: 1, md: 0.45 } }}>
                <FormControl
                  sx={{
                    width: 1,
                    mb: 3,
                    "& .mui-6k9065-MuiOutlinedInput-notchedOutline": {
                      border: "1px solid",
                    },
                  }}
                >
                  <InputLabel id="demo-simple-select-disabled-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-disabled-label"
                    id="demo-simple-select-disabled"
                    name="gender"
                    value={formData.gender}
                    label="Gender"
                    defaultValue={formData.gender}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: { xs: 1, md: 0.45 } }}>
                <TextField
                  id="outlined-number"
                  label="Date Of Birth"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  defaultValue={formData.dateOfBirth}
                  onChange={handleInputChange}
                  sx={{
                    width: 1,
                    "& .mui-6k9065-MuiOutlinedInput-notchedOutline": {
                      border: "1px solid",
                    },
                  }}
                />
              </Box>
            </Box>

            <Box mb={3}>
              <TextField
                id="outlined-disabled"
                label="Address"
                name="address"
                value={formData.address}
                defaultValue={formData.address}
                onChange={handleInputChange}
                sx={{
                  width: 1,
                  "& .mui-6k9065-MuiOutlinedInput-notchedOutline": {
                    border: "1px solid",
                  },
                }}
              />
            </Box>

            <Box mb={3}>
              <FormControl
                sx={{
                  width: 1,
                  "& .mui-6k9065-MuiOutlinedInput-notchedOutline": {
                    border: "1px solid",
                  },
                }}
              >
                <InputLabel id="demo-simple-select-disabled-label">
                  City
                </InputLabel>
                <Select
                  labelId="demo-simple-select-disabled-label"
                  id="demo-simple-select-disabled"
                  name="city"
                  value={formData.city}
                  label="City"
                  defaultValue={formData.city}
                  onChange={handleInputChange}
                >
                  <MenuItem value="lagos">Lagos</MenuItem>
                  <MenuItem value="abuja">Abuja</MenuItem>
                  <MenuItem value="port harcourt">Port Harcourt</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Button
              sx={{ width: { xs: 1 }, height: 50 }}
              onClick={handleChanges}
              disabled={
                !formData.firstname ||
                !formData.lastname ||
                !formData.email ||
                !formData.phoneNumber ||
                !formData.address ||
                !formData.occupation ||
                !formData.income ||
                !formData.city ||
                !formData.dateOfBirth ||
                !formData.gender
              }
              variant="contained"
              startIcon={<Save />}
            >
              Submit
            </Button>
          </Box>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Training;

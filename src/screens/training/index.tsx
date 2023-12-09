"use client";
import React, { useState, ChangeEvent } from "react";
import { CloudUpload, Edit, Save } from "@mui/icons-material";
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
import { FileDetails, TraineeProps } from "@/types/trainee";
// import { sendEmail } from '@li'

const Training = () => {
  const [trainees, setTrainees] = useState<TraineeProps[]>([]);
  const [formData, setFormData] = useState<TraineeProps>({
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
    file: null,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>
  ) => {
    if (e.target.name === "file") {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0];
      const fileDetails: FileDetails | null = file
        ? { name: file.name, size: file.size }
        : null;

      setFormData({
        ...formData,
        file: file as File | null, // Adjust the type here
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleChanges = async () => {
    try {
      setLoading(true);
      const newTraineeId = await createTrainee({
        traineeData: formData,
        file: formData.file,
      });

      console.log("New trainee created with ID:", newTraineeId);
      successMessage();

      //  const updatedTrainees: TraineeProps[] = await getTrainees();
      //  setTrainees(updatedTrainees);

      // await sendEmail(formData);

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
        file: null, // Clear the file field
      });
      setLoading(false);
    } catch (error) {
      console.error("Error creating trainee: ", error);
      errorMessage2();
      setLoading(false);
    }
  };

  const errorMessage1 = () => {
    toast.error("Please fill in all required fields.", {
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
    toast.error("An error occured. Please try again later", {
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

            {/* {console.log("File type:", formData.file)} */}
            {formData.file && formData.file.name && (
              <Box
                mb={3}
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography variant="body2">Selected Image Preview:</Typography>

                <img
                  src={URL.createObjectURL(formData.file)}
                  alt="Selected Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    marginTop: "8px",
                  }}
                />
              </Box>
            )}

            <Box
              sx={{
                width: { xs: 1, md: 0.45 },
                mb: 3,
                "& input[type='file']": {
                  display: "none",
                },
              }}
            >
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                name="file"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e)
                }
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  sx={{ width: "100%" }}
                  startIcon={<CloudUpload />}
                >
                  Upload Passport
                </Button>
              </label>
              <Typography variant="body2" mt={1} fontSize={8}>
                Make sure image is your real image which clearly shows you face.
                Avatars or placeholder images are not allowed.
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e)
                  }
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e)
                  }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e)
                }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e)
                }
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e)
                  }
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e)
                  }
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
                    onChange={(e: SelectChangeEvent<string>) =>
                      handleInputChange(e)
                    }
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e)
                  }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e)
                }
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
                name="city"
                value={formData.city}
                label="State"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e)
                }
                sx={{
                  width: 1,
                  "& .mui-6k9065-MuiOutlinedInput-notchedOutline": {
                    border: "1px solid",
                  },
                }}
              />
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
                !formData.gender ||
                !formData.file
              }
              variant="contained"
              startIcon={<Save />}
            >
              {loading ? "Submitting..." : "Submit"}
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

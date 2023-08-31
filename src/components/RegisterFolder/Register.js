import "./Register.css";
import React from "react";
import { useState, useContext } from "react";
import { Box, TextField, Button, Alert } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import styled from "@emotion/styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../BookAppContext";

const StyledBox = styled(Box)`
   width: 50%;
   text-align: center;
   margin: 0 auto;
   
   @media only screen and (max-width: 768px) {
    width: 100%;
`;

const StyledContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-color: #f4f4f4;
  border-radius: 10px;
  padding: 2rem;
  background-color: #e1f5fe;
`;
const StyledSigUpButton = styled.button`
  background-color: #ffc400;
  width: 50%;
  margin: 0 auto;
  border: none;
  border-radius: 30px;
  color: #37474f;
  font-size: 15px;
  font-weight: bold;
`;

function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
  const { setIsAuthenticated } = useContext(BookContext);
  const navigate = useNavigate();

  const baseUrl =
    "https://blooming-caverns-92946-ac7a48d2ef0b.herokuapp.com/api/user";

  const userInfo = { username, email, password };
  const handleSignup = async () => {
    try {
      const response = await axios.post(`${baseUrl}/signup`, userInfo);
      console.log("user info", response);
      setIsAuthenticated(true);
      navigate({
        pathname: "/book-list",
      });
    } catch (err) {
      console.log(err);
      setShowEmptyFieldsAlert(true);
    }
  };

  const handleLogIn = () => {
    navigate("/"); // Navigate to the Home page
  };

  return (
    <>
      <StyledBox
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > :not(style)": { m: 1 },
        }}
      >
        <FormControl>
          <h4 className="Styled-register-text">Welcome to our Register page</h4>
          <img
            style={{
              width: "75%",
              height: "250px",
              borderRadius: "10px",
              margin: "0 auto",
              padding: "5px",
            }}
            src="https://images.unsplash.com/photo-1687158369081-d21985127d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="#"
          />
          <StyledContainer>
            {showEmptyFieldsAlert && (
              <Alert severity="error">Please fill in all fields.</Alert>
            )}
            <h2 className="Styled-Sign-up-text">Sign up</h2>
            <TextField
              style={{ width: "50%", margin: "0 auto" }}
              helperText="Please enter your user name"
              type="email"
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              style={{ width: "50%", margin: "0 auto" }}
              helperText="Please enter your email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              style={{ width: "50%", margin: "0 auto" }}
              helperText="Please enter your password "
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledSigUpButton onClick={handleSignup} variant="contained">
              Sign-up
            </StyledSigUpButton>
            <h5>Already have an account ? log-in here!</h5>
            <Button
              onClick={handleLogIn}
              variant="contained"
              style={{ margin: "0 auto" }}
            >
              Log In
            </Button>
          </StyledContainer>
        </FormControl>
      </StyledBox>
    </>
  );
}

export default Register;

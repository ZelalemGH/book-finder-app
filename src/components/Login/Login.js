import { useState, useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "@mui/material";
import { BookContext } from "../../BookAppContext";

const StyledBox = styled(Box)`
   display: flex;
   flex-direction: column;
   width: 50%;
   text-align: center;
   margin: 0 auto;
   
   @media only screen and (max-width: 768px) {
    width: 100%;
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalidCredintial, setIsInvalidCredintial] = useState(false);
  const { setIsAuthenticated } = useContext(BookContext);
  const navigate = useNavigate();

  const baseUrl =
    "https://blooming-caverns-92946-ac7a48d2ef0b.herokuapp.com/api/user";

  const handleLogin = async (userInfo) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, userInfo);

      const token = response?.data;

      console.log(token);
      if (token) {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        navigate({
          pathname: "/book-list",
        });
      }
    } catch (err) {
      console.log(err);
      setIsInvalidCredintial(true);
      setIsAuthenticated(false);
      navigate({
        pathname: "/",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email, password };
    handleLogin(userInfo);
  };

  return (
    <>
      {isInvalidCredintial && (
        <Alert severity="error">
          This is an error alert — Invalid Credintial!
        </Alert>
      )}
      <StyledBox
        validate
        component="form" // html element
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > :not(style)": { m: 1 },
        }}
        onSubmit={handleSubmit}
      >
        <FormControl>
          <h2 style={{ textAlign: "Center" }}>Login</h2>
          <TextField
            helperText="Please enter your email"
            id="demo-helper-text-aligned"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            helperText="Please enter your password "
            id="demo-helper-text-aligned-no-helper"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} variant="contained" type="submit">
            sign-in
          </Button>
        </FormControl>
      </StyledBox>
    </>
  );
}

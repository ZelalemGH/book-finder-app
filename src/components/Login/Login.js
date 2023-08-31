import { useState, useContext } from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "@mui/material";
import { BookContext } from "../../BookAppContext";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const StyledBox = styled(Box)`
   display: flex;
   flex-direction: column;
   width: 50%;
   text-align: center;
   margin: 0 auto;
   
   @media only screen and (max-width: 768px) {
    width: 100%;
`;

const StyledSigInButton = styled.button`
  background-color: #ffc400;
  border: none;
  border-radius: 30px;
  color: #37474f;
  font-size: 15px;
  font-weight: bold;
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalidCredintial, setIsInvalidCredintial] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <StyledSigInButton onClick={handleLogin} type="submit">
            Sign In
          </StyledSigInButton>
        </FormControl>
      </StyledBox>
    </>
  );
}

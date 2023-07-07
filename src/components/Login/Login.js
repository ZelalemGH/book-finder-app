import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import styled from "@emotion/styled";

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
    const [userInfo, setUserInfo] = useState({});

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email && password) {
            setUserInfo({
                email,
                password,
            });
        }

        console.log("submitted!");
    };

    console.log("userInfo", userInfo);

    return (
        <StyledBox
            validate
            component='form' // html element
            sx={{
                display: "flex",
                flexDirection: "column",
                "& > :not(style)": { m: 1 }
            }}
            onSubmit={handleSubmit}
        >
            <FormControl>
                <h2 style={{ textAlign: "Center" }}>Login</h2>
                <TextField
                    helperText='Please enter your email'
                    id='demo-helper-text-aligned'
                    label='Email'
                    type='email'
                    onChange={handleEmail}
                />
                <TextField
                    helperText='Please enter your password '
                    id='demo-helper-text-aligned-no-helper'
                    label='Password'
                    type='password'
                    onChange={handlePassword}
                />
                <Button variant='contained' type='submit'>
                    sign-in
                </Button>
            </FormControl>
        </StyledBox>
    );
}

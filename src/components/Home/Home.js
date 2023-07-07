import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Login from "../Login/Login";

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.secondaryHeaderFontSize}px;
  font-style: italic; 
  text-align: center;
  font-weight: bold;
  color: #ff4081;
  text-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
`;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin: 10px;
  width:100%;
  border: 2px solid black;
  `;

const StyledContainer = styled.div`
  gap: 1.5rem;
  text-align: center;
  width: 50%;
  border-color: #f4f4f4;
  border-radius: 10px;
  padding: 2rem;
  background-color: #e1f5fe;
  margin: 10px;
`;

const Home = () => {

    return (
        <StyledHome>
            <StyledHeading>A room without books is like a body without soul.</StyledHeading>
            <StyledContainer>
                <Login />
                <h5 style={{ color: "#555", marginBottom: "1rem" }}>Don't you have an account ? register here!</h5>
                <Button variant='outlined'>Register</Button>
            </StyledContainer>
        </StyledHome>
    );
};

export default Home;

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Login from "../Login/Login";
import { useNavigate } from "react-router";

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.secondaryHeaderFontSize}px;
  font-style: italic;
  text-align: center;
  color: #212121;
  text-shadow: 5px 5px 8px #ff5722;
`;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin: 10px;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1490735891913-40897cdaafd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
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
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate({
      pathname: "/signup",
    });
  };

  return (
    <StyledHome>
      <StyledHeading>
        A room without books is like a body without soul.
      </StyledHeading>
      <StyledContainer>
        <Login />
        <h5 style={{ color: "#555", marginBottom: "1rem" }}>
          Don't you have an account ? register here!
        </h5>
        <Button
          onClick={handleRegister}
          variant="contained"
          style={{ margin: "2rem" }}
        >
          Register
        </Button>
      </StyledContainer>
    </StyledHome>
  );
};

export default Home;

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
      <styledUrlImage>
        <img
          style={{
            width: "350px",
            height: "200px",
            borderRadius: "10px",
            margin: "0 auto",
          }}
          src="https://media.istockphoto.com/id/1260329669/vector/tiny-male-and-female-characters-reading-and-working-on-laptop-sitting-on-huge-books-pile.jpg?s=1024x1024&w=is&k=20&c=Fo71tRURjjuB2-Bb8ceX-ysNgTP1IZC-o7jBTDNJmVA="
          alt="#"
        />
      </styledUrlImage>
      <StyledContainer>
        <Login />
        <h5 style={{ color: "#555", marginBottom: "1rem" }}>
          Don't you have an account ? register here!
        </h5>
        <Button
          onClick={handleRegister}
          variant="contained"
          style={{ margin: "0 auto" }}
        >
          Register
        </Button>
      </StyledContainer>
    </StyledHome>
  );
};

export default Home;

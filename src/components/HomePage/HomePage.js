import BookList from "../BookListFolder/BookList";
import Header from "../Header/Header";
import Search from "../SearchFolder/Search";
import "./HomePage.css";
import styled from "@emotion/styled";

const StyledHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #cfd8dc;
  margin: 5px;
  padding: 5px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

function HomePage() {
  return (
    <StyledHomeWrapper>
      <Header headerTitle="Find your book" />
      <Search />
      <BookList />
    </StyledHomeWrapper>
  );
}

export default HomePage;

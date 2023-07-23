import React from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import NavBar from "../components/NavBarFolder/NavBar";
import FavoriteBook from "../components/FavoriteBookFolder/FavoriteBook";

function FavoriteBookPage() {
  return (
    <>
      <NavBar />
      <Wrapper>
        <FavoriteBook />
      </Wrapper>
    </>
  );
}

export default FavoriteBookPage;

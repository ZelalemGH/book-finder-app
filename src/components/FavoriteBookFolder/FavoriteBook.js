import React from "react";
import "./FavoriteBook.css";
import { useContext } from "react";
import { BookContext } from "../../BookAppContext";

function FavoriteBook() {
  const { favoriteBooks } = useContext(BookContext);
  return (
    <div className="favorites">
      {favoriteBooks.map((book, index) => {
        return (
          <div key={index}>
            <img src={book.image_url} alt="#" />
            <h2>{book.title}</h2>
            <h3>{book.authors}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default FavoriteBook;

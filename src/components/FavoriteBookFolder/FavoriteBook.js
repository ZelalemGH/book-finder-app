import React from "react";
import "./FavoriteBook.css";
import { useContext } from "react";
import { BookContext } from "../../BookAppContext";

function FavoriteBook() {
  const { favoriteBooks, setFavoriteBooks } = useContext(BookContext);

  const removeFromFavorites = (id) => {
    const oldFavorite = [...favoriteBooks];

    const newFavorites = oldFavorite.filter((book) => book._id !== id);

    setFavoriteBooks(newFavorites);
  };

  return (
    <div className="favorites">
      {favoriteBooks?.length > 0 ? (
        favoriteBooks.map((book, index) => {
          return (
            <div key={index}>
              <img src={book.image_url} alt="#" />
              <h2>{book.title}</h2>
              <h3>{book.authors}</h3>
              <button onClick={() => removeFromFavorites(book._id)}>
                Remove from Favorites
              </button>
            </div>
          );
        })
      ) : (
        <h1>You don't have any favorite books yet</h1>
      )}
    </div>
  );
}

export default FavoriteBook;

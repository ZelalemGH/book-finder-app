import React, { useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const BookContext = React.createContext();

// Create a provider component
export const BookProvider = (props) => {
  const [bookInfo, setBookInfo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [bookDetail, setBookDetail] = useState({});
  const [editableBook, setEditableBook] = useState(null);

  const apiUrl =
    "https://blooming-caverns-92946-ac7a48d2ef0b.herokuapp.com/api/book/getallbooks";

  async function getBook() {
    try {
      const response = await axios.get(apiUrl);
      const data = await response.data;
      setBookInfo(data);
      setBookDetail(data[0]);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  }

  useEffect(() => {
    getBook();
  }, []);

  const handleSearch = () => {
    const filteredData = bookInfo.filter(({ title }) => {
      const searchTitle = title.toLowerCase();
      const searchLowerValue = inputValue.toLowerCase();

      return searchLowerValue === searchTitle;
    });
    console.log("filtered data", filteredData);
    setBookInfo(filteredData);
  };

  return (
    <BookContext.Provider
      value={{
        bookInfo,
        setBookInfo,
        inputValue,
        setInputValue,
        isError,
        setIsError,
        isLoading,
        setIsLoading,
        handleSearch,
        bookDetail,
        setBookDetail,
        editableBook,
        setEditableBook,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

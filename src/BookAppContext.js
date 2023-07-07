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
  

  const apiUrl = "https://example-data.draftbit.com/books?_Limit=50";

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
      return title === inputValue;
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
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

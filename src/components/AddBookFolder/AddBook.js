import { useState, useContext, useEffect } from "react";
import "./AddBook.css";
import { BookContext } from "../../BookAppContext";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const StyledAddBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddBook = () => {
  const { setBookInfo, bookInfo, editableBook } = useContext(BookContext);
  const [inputValues, setInputValues] = useState({
    title: "",
    authors: "",
    description: "",
    edition: "",
    format: "",
    genres: "",
    image_url: "",
  });

  const { id } = useParams();
  console.log("id", id);
  console.log("editableBooktwo", editableBook);

  useEffect(() => {
    if (id) {
      const bookToEdit = bookInfo.find((book) => book._id === id);
      setInputValues(bookToEdit);
    } else {
      setInputValues({
        title: "",
        authors: "",
        description: "",
        edition: "",
        format: "",
        genres: "",
        image_url: "",
      });
    }
  }, [id, bookInfo]);

  const postBook = () => {
    console.log("post");
    axios
      .post(
        "https://blooming-caverns-92946-ac7a48d2ef0b.herokuapp.com/api/book/addbook",
        inputValues
      )
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log("response error", error);
      });
  };

  const editBook = () => {
    axios
      .put(
        `https://blooming-caverns-92946-ac7a48d2ef0b.herokuapp.com/api/book/${id}`,
        inputValues
      )
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log("response error", error);
      });
  };

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const SuccessAlert = () => {
    return (
      <div
        style={{
          backgroundColor: "lightgreen",
          border: "1px solid lightgreen",
          height: "160px",
        }}
      >
        <h2>Succes</h2>
        <p>Successfuly submited the book information!</p>
      </div>
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBookInfo([...bookInfo, inputValues]);
    setShowSuccessAlert(true);
    if (!id) {
      postBook();
    }
    editBook();
  };

  // console.log("succes", showSuccessAlert);

  return (
    <StyledAddBookWrapper>
      <h1>Add Book</h1>
      {showSuccessAlert && <SuccessAlert />}
      <StyledForm onSubmit={handleSubmit}>
        <input
          className="book-input-field"
          type="text"
          placeholder="title"
          value={inputValues.title}
          name="title"
          onChange={handleChange}
        />
        <input
          className="book-input-field"
          type="text"
          placeholder="authors"
          value={inputValues.authors}
          name="authors"
          onChange={handleChange}
        />
        <input
          className="book-input-field"
          type="text"
          placeholder="description"
          value={inputValues.description}
          name="description"
          onChange={handleChange}
        />
        <input
          className="book-input-field"
          type="text"
          placeholder="edition"
          value={inputValues.edition}
          name="edition"
          onChange={handleChange}
        />
        <input
          className="book-input-field"
          type="text"
          placeholder="format"
          value={inputValues.format}
          name="format"
          onChange={handleChange}
        />
        <input
          className="book-input-field"
          type="text"
          placeholder="genres"
          value={inputValues.genres}
          name="genres"
          onChange={handleChange}
        />
        <input
          className="book-input-field"
          type="text"
          placeholder="Image url"
          value={inputValues.image_url}
          name="image_url"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </StyledForm>
    </StyledAddBookWrapper>
  );
};

export default AddBook;

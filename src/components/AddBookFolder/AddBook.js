import { useState, useContext } from "react";
import "./AddBook.css";
import { BookContext } from "../../BookAppContext";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import axios from "axios";

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
    const { setBookInfo, bookInfo } = useContext(BookContext);
    const [inputValues, setInputValues] = useState({
        title: "",
        authors: "",
        description: "",
        edition: "",
        format: "",
        genres: "",
        image_url: "",
    });

    const postBook = () => {
        axios
            .post(
                "https://calm-everglades-09552-105a0b4519dc.herokuapp.com/api/book/book",
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
        const { title, value } = event.target;
        setInputValues({ ...inputValues, [title]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBookInfo([...bookInfo, inputValues]);
        setShowSuccessAlert(true);
    };

    console.log("succes", showSuccessAlert);

    return (
        <StyledAddBookWrapper>
            <h1>Add Book</h1>
            {showSuccessAlert && <SuccessAlert />}
            <StyledForm onSubmit={handleSubmit}>
                <input
                    className="book-input-field"
                    type='text'
                    placeholder='Title'
                    value={inputValues.title}
                    name='title'
                    onChange={handleChange}
                />
                <input
                    className="book-input-field"
                    type='text'
                    placeholder='Authors'
                    value={inputValues.authors}
                    name='authors'
                    onChange={handleChange}
                />
                <input
                    className="book-input-field"
                    type='text'
                    placeholder='Description'
                    value={inputValues.description}
                    name='description'
                    onChange={handleChange}
                />
                <input
                    className="book-input-field"
                    type='text'
                    placeholder='Edition'
                    value={inputValues.edition}
                    name='edition'
                    onChange={handleChange}
                />
                <input
                    className="book-input-field"
                    type='text'
                    placeholder='Format'
                    value={inputValues.format}
                    name='format'
                    onChange={handleChange}
                />
                <input
                    className="book-input-field"
                    type='text'
                    placeholder='Genres'
                    value={inputValues.genres}
                    name='genres'
                    onChange={handleChange}
                />
                <input
                    className="book-input-field"
                    type='text'
                    placeholder='Image url'
                    value={inputValues.image_url}
                    name='image'
                    onChange={handleChange}
                />
                <Button variant='contained' onClick={postBook}>Submit</Button>
            </StyledForm>
        </StyledAddBookWrapper>
    );
};

export default AddBook;

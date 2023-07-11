import "./BookListItem.css";
import { useContext } from "react";
import { BookContext } from "../../BookAppContext";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
} from "@mui/material";
import BookDetail from "../BookDetailFolder/BookDetail";
import { Delete, Edit, Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const StyledCard = styled(Paper)`
  padding: 0.5rem 0.25rem;
  margin: 0.5rem;
`;
const StyledCardDesktop = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.2rem;
  gap: 15px;
  margin: 5px 0px;
  cursor: pointer;
  box-shadow: 0 5px 10px #9e9e9e;
`;
const StyledAccordion = styled(Accordion)`
  margin-top: 1rem;
`;

function BookListItem() {
  const {
    bookInfo,
    setBookDetail,
    setBookInfo,
    editableBook,
    setEditableBook,
  } = useContext(BookContext);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  const handleDelete = (_id) => {
    axios
      .delete(
        `https://blooming-caverns-92946-ac7a48d2ef0b.herokuapp.com/api/book/${_id}`
      )
      .then(() => {
        const updatedBookInfo = bookInfo.filter((book) => book._id !== _id);
        setBookInfo(updatedBookInfo);
      })
      .catch((error) => {
        console.log("Delete book error", error);
      });
  };

  const handleEdit = (id) => {
    const bookToEdit = bookInfo.filter((book) => book._id === id);
    setEditableBook(bookToEdit);
  };

  console.log("editablebook", editableBook);

  return (
    <>
      {isMobile &&
        bookInfo.map(({ image_url, title }, index) => {
          return (
            <StyledAccordion key={index}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <StyledCard
                  className="styled-book-list-item"
                  key={index}
                  onClick={() => setBookDetail(bookInfo[index])}
                >
                  <img style={{ margin: "0 auto" }} src={image_url} alt="#" />
                  <div>
                    <h4>{title}</h4>
                  </div>
                </StyledCard>
              </AccordionSummary>
              <AccordionDetails>
                <BookDetail />
              </AccordionDetails>
            </StyledAccordion>
          );
        })}
      {!isMobile &&
        bookInfo.map(({ _id, image_url, title }, index) => {
          return (
            <StyledCardDesktop
              key={index}
              onClick={() => setBookDetail(bookInfo[index])}
            >
              <img src={image_url} alt="#" />
              <div className="styled-book-list-items">
                <h4>{title}</h4>
              </div>
              <div>
                <IconButton>
                  <Delete onClick={() => handleDelete(_id)} />
                </IconButton>
                <IconButton>
                  <Edit
                    onClick={() => {
                      handleEdit(_id);
                      navigate(`/add-book/${_id}`);
                      console.log("editableBook", editableBook);
                    }}
                  />
                </IconButton>
                <IconButton>
                  <Add
                    onClick={() => {
                      navigate(`/add-book`);
                    }}
                  />
                </IconButton>
              </div>
            </StyledCardDesktop>
          );
        })}
    </>
  );
}

export default BookListItem;

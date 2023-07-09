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
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledCard = styled.div`
  display: flex;
  padding: 0.5rem 0.2rem;
  gap: 10px;
  margin: 5px 0px;
  cursor: pointer;
  width: 100%;
`;
const StyledCardDesktop = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.2rem;
  gap: 10px;
  margin: 5px 0px;
  cursor: pointer;
`;
const StyledAccordion = styled(Accordion)`
  margin-top: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  padding: 0.5rem 0.2rem;
  gap: 10px;
  cursor: pointer;
  color: blue;
  text-align: center;
  flex-direction: column;
  text-align: center;
  margin: 5px 0px;
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
                  key={index}
                  onClick={() => setBookDetail(bookInfo[index])}
                >
                  <div className="book-content">
                    <h4>{title}</h4>
                  </div>
                  <img src={image_url} alt="#" />
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
              <StyledDiv>
                <div>
                  <h4 className="book-name">{title}</h4>
                </div>
                <img src={image_url} alt="#" />
              </StyledDiv>
              <div style={{ textAlign: "left", paddingRight: "1 rem" }}>
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
                <Link to="/add-book">
                  <IconButton>
                    <Add />
                  </IconButton>
                </Link>
              </div>
            </StyledCardDesktop>
          );
        })}
    </>
  );
}

export default BookListItem;

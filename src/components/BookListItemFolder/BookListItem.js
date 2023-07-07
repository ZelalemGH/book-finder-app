import "./BookListItem.css";
import { useContext } from "react";
import { BookContext } from "../../BookAppContext";
import styled from "styled-components";
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
    const { bookInfo, setBookDetail } = useContext(BookContext);

    const isMobile = useMediaQuery({ maxWidth: 768 });
    console.log("book data", bookInfo);

    return (
        <>
            {isMobile &&
                bookInfo.map(({ image_url, title }, index) => {
                    return (
                        <StyledAccordion>
                            <AccordionSummary
                                aria-controls='panel1a-content'
                                id='panel1a-header'
                            >
                                <StyledCard
                                    key={index}
                                    onClick={() => setBookDetail(bookInfo[index])}
                                >
                                    <div className='book-content'>
                                        <h4>{title}</h4>
                                    </div>
                                    <img src={image_url} alt='#' />
                                </StyledCard>
                            </AccordionSummary>
                            <AccordionDetails>
                                <BookDetail />
                            </AccordionDetails>
                        </StyledAccordion>
                    );
                })}
            {!isMobile &&
                bookInfo.map(({ image_url, title }, index) => {
                    return (
                        <StyledCardDesktop
                            key={index}
                            onClick={() => setBookDetail(bookInfo[index])}
                        >
                            <StyledDiv>
                                <div>
                                    <h4 className='book-name'>{title}</h4>
                                </div>
                                <img src={image_url} alt='#' />
                            </StyledDiv>
                            <div style={{ textAlign: "left", paddingRight: "1 rem" }}>
                                <IconButton>
                                    <Delete />
                                </IconButton>
                                <IconButton>
                                    <Edit onClick={() => setBookDetail(bookInfo[index])} />
                                </IconButton>
                                <IconButton>
                                    <Add />
                                </IconButton>
                            </div>
                        </StyledCardDesktop>
                    );
                })}
        </>
    );
}

export default BookListItem;



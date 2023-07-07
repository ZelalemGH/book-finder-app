import BookListItem from "../BookListItemFolder/BookListItem";
import { useContext } from "react";
import { BookContext } from "../../BookAppContext";

const BookList = () => {
    const { isError } = useContext(BookContext);
    return (
        <>
            {isError !== false && (
                <p style={{ color: "red" }}>Server error please try again</p>
            )}
            <BookListItem />
        </>
    );
};

export default BookList;

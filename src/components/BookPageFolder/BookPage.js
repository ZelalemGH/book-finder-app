import BookDetail from "../BookDetailFolder/BookDetail";
import Header from "../Header/Header";
import "./BookPage.css";
import { useMediaQuery } from "react-responsive";

function BookPage() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <>
            {!isMobile && (
                <div className='book-page'>
                    <Header headerTitle='Your book detail' />
                    <BookDetail />
                </div>
            )}
        </>
    );
}

export default BookPage;

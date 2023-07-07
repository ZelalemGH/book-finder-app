import Wrapper from "../components/Wrapper/Wrapper";
import HomePage from "../components/HomePage/HomePage";
import BookPage from "../components/BookPageFolder/BookPage";
import NavBar from "../components/NavBarFolder/NavBar";

const BookListPage = () => {
    return (
        <>
            <NavBar />
            <Wrapper>
                <HomePage />
                <BookPage />
            </Wrapper>
        </>
    );
};

export default BookListPage;

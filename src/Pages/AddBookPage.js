import AddBook from "../components/AddBookFolder/AddBook";
import Wrapper from "../components/Wrapper/Wrapper";
import NavBar from "../components/NavBarFolder/NavBar";

const AddBookPage = () => {
    return (
        <>
            <NavBar />
            <Wrapper>
                <AddBook />
            </Wrapper>
        </>
    );
};

export default AddBookPage;

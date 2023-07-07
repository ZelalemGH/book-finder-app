import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BookContext } from "../../BookAppContext";
import { useContext } from "react";
import styled from "@emotion/styled";
import "./Search.css";


const StyledSearch = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;

  .search-input {
    flex-grow: 3;
    margin-right: -55px;
    font-size: 15px;
    height: 30px;
    &:hover {
      background: #ffebee;
    }
  }
`;

function Search() {
    const { setInputValue, handleSearch } = useContext(BookContext);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <StyledSearch>
            <input className="search-input" type='text' onChange={handleInputChange} />
            <FontAwesomeIcon className="fontAwsome-icon" icon={faSearch} onClick={handleSearch} />
        </StyledSearch>
    );
}

export default Search;

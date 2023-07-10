import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AddBookPage from "./Pages/AddBookPage";
import BookListPage from "./Pages/BookListPage";
import LoginPage from "./Pages/LoginPage";
import { BookProvider } from "./BookAppContext";
import Register from "./components/RegisterFolder/Register";

import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const theme = {
  primary: "#2196F3",
  secondary: "red",
  primaryHeaderFontSize: "68",
  paragraphFontSize: "24",
  mobile: "768",
  tablet: "992",
  laptop: "1022",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BookProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-book/:id?" element={<AddBookPage />} />
          <Route path="/book-list" element={<BookListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BookProvider>
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import HomePage from "./pages/HomePage";
import AddBookPage from "./pages/AddBookPage";
import { Routes, Route } from "react-router-dom";
import BookListPage from "./pages/BookListPage";
import { BookProvider } from "./BookAppContext";
import LoginPage from "./pages/LoginPage";

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
          <Route path='/' element={<HomePage />} />
          <Route path='/add-book' element={<AddBookPage />} />
          <Route path='/book-list' element={<BookListPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BookProvider>
    </ThemeProvider>
  );
}

export default App;

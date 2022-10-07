import { ThemeProvider } from "@emotion/react";
import { DefaultTheme } from "./styles/DefaultTheme";
import { Global } from "@emotion/react";
import { globalStyle } from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { Container } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <ThemeProvider theme={DefaultTheme}>
        <Container>
          <Routes>
            <Route path="/" element={<SignIn />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

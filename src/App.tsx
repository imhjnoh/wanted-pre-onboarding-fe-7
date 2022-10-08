import { ThemeProvider } from "@emotion/react";
import { DefaultTheme } from "./styles/DefaultTheme";
import { Global } from "@emotion/react";
import { globalStyle } from "./styles/GlobalStyle";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import { Container } from "./ui";
import Todo from "./pages/Todo";

function App() {
  const isLogin: boolean = Boolean(localStorage.getItem("token"));
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <ThemeProvider theme={DefaultTheme}>
        <Container>
          <Routes>
            <Route
              path="/"
              element={isLogin ? <Navigate to="/todo" /> : <SignIn />}
            />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

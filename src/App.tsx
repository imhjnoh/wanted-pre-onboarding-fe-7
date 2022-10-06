import { ThemeProvider } from '@emotion/react';
import { DefaultTheme } from './styles/DefaultTheme';
import { Global } from '@emotion/react';
import { globalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
    <Global styles={globalStyle} />
    <ThemeProvider theme={DefaultTheme}>
    </ThemeProvider>
    </>
  );
}

export default App;

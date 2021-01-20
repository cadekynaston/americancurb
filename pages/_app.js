/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from 'theme-ui';

import theme from '../src/utils/theme';
import 'fontsource-poppins';
import '../node_modules/normalize.css/normalize.css';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;

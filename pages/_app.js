/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from 'theme-ui';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import theme from '../src/utils/theme';
import 'fontsource-poppins';
import '../node_modules/normalize.css/normalize.css';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({
      gtmId: 'G-HZ5LJV12BL',
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

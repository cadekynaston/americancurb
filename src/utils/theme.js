const theme = {
  breakpoints: ['768px', '1024px'],
  space: [0, 4, 8, 16, 32, 64, 128, 200, 256],
  fonts: {
    body: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Poppins Medium, sans-serif',
  },
  fontSizes: [14, 16, 18, 20, 24, 40, 60, 80],
  fontWeights: {
    body: 400,
    semibold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  letterSpacings: {
    subtitle: '10%',
  },
  colors: {
    text: '#222',
    background: '#FBFFFE',
    primary: '#FC6449',
    secondary: '#DE7C5A',
    muted: '#F3F3F3',
    highlighted: '#F5F5F5',
    gray: '#D0D0D0',
    opaque: 'rgba(0,0,0,.25)',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'semibold',
    },
  },
  radii: [5],
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: [6, 7],
      m: 0,
      mb: 2,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5,
      m: 0,
      mb: 2,
    },
    p: {
      variant: 'text.body',
      fontSize: [2, 3],
      m: 0,
      mb: 2,
    },
    a: {
      variant: 'text.body',
      fontSize: 2,
    },
  },
  maxWidth: 1200,
  boxShadow: '0 3px 8px rgba(0,0,0,.24)',
};

export default theme;

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'poppins',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 22, 24, 32, 48, 60],
  fontWeights: {
    thin: 300,
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#242325',
    background: '#FBFFFE',
    primary: '#7BC950',
    secondary: '#284B63',
    muted: '#D9D9D9',
    accent: '#DE7C5A',
    highlighted: '#F5F5F5',
    opaque: 'rgba(249,231,231, 0.6)',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 8,
      m: 0,
      mb: 2,
      fontWeight: 'thin',
    },
    h2: {
      variant: 'text.heading',
      fontSize: 7,
      m: 0,
      mb: 2,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 6,
      m: 0,
      mb: 2,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 5,
      m: 0,
      mb: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 4,
      m: 0,
      mb: 2,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 3,
      m: 0,
      mb: 2,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
  custom: {
    maxWidth: 1100,
  },
};

export default theme;

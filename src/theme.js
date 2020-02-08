import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#ffffff',
    vanilla: '#F5F6FC',
    black: '#181818',
    gray: '#8b8b8b',
    yellow: '#F6D200',
    orange: '#FCA400',
    darkOrange: '#F26400',
    red: '#F31E16',
    rose: '#FF6464',
    purple: '#871B97',
    violet: '#5A2598',
    indigo: '#432DA0',
    blue: '#3284e5',
    cyan: '#0ACDFC',
    emerald: '#28AF6F',
    green: '#26A53C',
    lime: '#94CE00',
    transparent: '#00000000',
  },
  fonts: {
    ultralight: 'SFCompactDisplay-Ultralight',
    light: 'SFCompactDisplay-Light',
    thin: 'SFCompactDisplay-Thin',
    medium: 'SFCompactDisplay-Medium',
    regular: 'SFCompactDisplay-Regular',
    semibold: 'SFCompactDisplay-Semibold',
    bold: 'SFCompactDisplay-Bold',
    black: 'SFCompactDisplay-Black',
    heavy: 'SFCompactDisplay-Heavy',
  },
  fontSizes: {
    small: '16px',
    medium: '20px',
    large: '24px',
  },
};

const Main = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.vanilla};
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Main>{children}</Main>
  </ThemeProvider>
);

export default Theme;

import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import blinkistTheme from '../src/themes/theme';
import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={blinkistTheme}>
      <Story />
    </ThemeProvider>)
    ,
    (Story) => (<MemoryRouter><Story/></MemoryRouter>)
]
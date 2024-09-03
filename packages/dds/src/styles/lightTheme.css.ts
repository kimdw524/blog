import { createTheme } from '@vanilla-extract/css';

import colorPalette from './colorPalette';

import themeContract from './theme.css';

export default createTheme(themeContract, {
  palette: {
    primary: {
      main: colorPalette.blue.A400,
      contrastText: '#fff',
      hover: colorPalette.blue.A200,
      active: colorPalette.blue.A700,
      disabled: colorPalette.blue['100'],
    },
    secondary: {
      main: colorPalette.blueGrey.A700,
      contrastText: '#fff',
      hover: colorPalette.blueGrey['500'],
      active: colorPalette.blueGrey['800'],
      disabled: colorPalette.blueGrey.A200,
    },
    success: {
      main: colorPalette.green['500'],
      contrastText: '#fff',
      hover: colorPalette.green['400'],
      active: colorPalette.green['700'],
      disabled: colorPalette.green['200'],
    },
    danger: {
      main: colorPalette.red['500'],
      contrastText: '#fff',
      hover: colorPalette.red.A200,
      active: colorPalette.red['800'],
      disabled: colorPalette.red['200'],
    },
  },
  color: {
    border: {
      primary: colorPalette.blueGrey['400'],
      secondary: colorPalette.blueGrey['200'],
      disabled: colorPalette.blueGrey['100'],
    },
    background: '#fff',
    text: {
      primary: '#000',
      secondary: colorPalette.blueGrey['700'],
      disabled: colorPalette.blueGrey.A100,
    },
  },
});

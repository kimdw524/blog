import { createThemeContract } from '@vanilla-extract/css';

const themeContract = {
  palette: {
    primary: {
      main: null,
      contrastText: null,
      hover: null,
      active: null,
      disabled: null,
    },
    secondary: {
      main: null,
      contrastText: null,
      hover: null,
      active: null,
      disabled: null,
    },
    success: {
      main: null,
      contrastText: null,
      hover: null,
      active: null,
      disabled: null,
    },
    danger: {
      main: null,
      contrastText: null,
      hover: null,
      active: null,
      disabled: null,
    },
  },
  color: {
    border: {
      primary: null,
      secondary: null,
      disabled: null,
    },
    background: null,
    text: {
      primary: null,
      secondary: null,
      disabled: null,
    },
  },
};

export type Palette = keyof typeof themeContract.palette;

export default createThemeContract(themeContract);

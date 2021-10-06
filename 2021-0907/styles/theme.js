import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: '#4791db',
        main: '#1976d3',
        dark: '#115293',
        darkLight: '#0d0e28',
        contrastText: '#fff',
      },
      secondary: {
        light: '#555e6c',
        main: '#b20000',
        dark: '#1e2532',
        contrastText: '#fff',
      },
      error: {
        light: '#ff3333',
        main: '#ff0000',
        dark: '#b20000',
        contrastText: '#fff',
      },
      background: {
        default: '#0c0e28',
        main: '#1B1F2E',
        dark: '#000000',
        selectedHeader: '#161925',
        selectedCell: '#151823',
        player: '#1B1F2E',
        blue: '#1a2c40',
        paper: '#115293',
        card: '#00275a',
        overlay: 'rgba(100,100,100, 0.2)',
      },
      text: {
        primary: '#ffffff',
        secondary: '#8697a2',
        darkLight: '#E6F0F2',
        caption: '#90929C',
        notification: '#8D9BD4',
        chip: '#8B8D95',
        success: '#00d27a',
      },
    },
    custom: {
      palette: {
        green: '#4caf50',
        blueGrey: '#5c739c',
        lightGrey: '#31373f',
        blackGrey: '#77787e',
        darkRed: '#BA1A48',
        lightRed: '#a20e3c',
        hover: '#16ACE2',
        button: '#105292',
        black: '#0F1119',
        yellow: 'yellow',
        darkYellow: '#FFA000',
        darkGrey: '#1B1F2E',
        gold: '#D8A42D',
      },
      layout: {
        topAppBarHeight: 47,
        footerHeight: 280,
        maxAppWidth: '1520px',
      },
    },
    overrides: {
      MuiSwitch: {
        track: {
          backgroundColor: '#4791db',
        },
      },
      MuiFormControlLabel: {
        label: {
          '&.Mui-disabled': {
            color: '#314252',
          },
        },
      },
    },
  }),
);

const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: '#4791db',
        main: '#1976d3',
        dark: '#115293',
        darkLight: '#0d0e28',
        contrastText: '#fff',
      },
      secondary: {
        light: '#555e6c',
        main: '#b20000',
        dark: '#1e2532',
        contrastText: '#fff',
      },
      error: {
        light: '#ff3333',
        main: '#ff0000',
        dark: '#b20000',
        contrastText: '#fff',
      },
      background: {
        default: '#DCDCDC',
        main: '#edf2f9',
        dark: '#000000',
        selectedHeader: '#DCDCDC',
        selectedCell: '#DCDCDC',
        player: '#AAAAAA',
        blue: '#1a2c40',
        card: '#e4e4e4',
      },
      text: {
        primary: '#0F1119',
        secondary: '#8697a2',
        darkLight: '#0F1119',
        caption: '#90929C',
        notification: '#8D9BD4',
        chip: '#0F1119',
        success: '#00d27a',
      },
    },
    custom: {
      palette: {
        green: '#4caf50',
        blueGrey: '#5c739c',
        lightGrey: '#0F1119',
        blackGrey: '#77787e',
        darkRed: '#ba1a48',
        lightRed: '#a20e3c',
        hover: '#16ACE2',
        button: '#105292',
        black: '#DCDCDC',
        darkGrey: '#c7c7c7',
        gold: '#D8A42D',
      },
      layout: {
        topAppBarHeight: 47,
        footerHeight: 280,
        maxAppWidth: '1520px',
      },
    },
  }),
);

export { theme, lightTheme };

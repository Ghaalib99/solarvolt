import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { baseThemeOptions } from './base-theme-options';
import { darkThemeOptions } from './dark-theme-options';
import { lightThemeOptions } from './light-theme-options'

const roboto = Roboto({
   weight: ['300', '400', '500', '700'],
   subsets: ['latin'],
   display: 'swap',
});

let theme = createTheme(baseThemeOptions, lightThemeOptions);

theme = responsiveFontSizes(theme);

export default theme;

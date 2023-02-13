import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
            
        },

    },
    textDecoration: "none"
});
export const theme2 = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
            contrastText: '#000000',

        },

    },
});

export const twoBtnTheme = createTheme({
    palette: {
        primary: {
            main: '#006D3F',
            contrastText: '#ffffff',
        },

    },
});

export const btnTheme = createTheme({
    palette: {
        primary: {
            main: '#fcba03',
            contrastText: '#118f03',
        },

    },
})
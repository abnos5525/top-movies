import {createTheme, ThemeProvider} from "@mui/material/styles"
import createCache from "@emotion/cache"
import {prefixer} from "stylis";
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from "@emotion/react";
import {HelmetProvider} from "react-helmet-async";
import Header from "../../components/Header.jsx";

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export const theme = createTheme({
    direction: 'rtl',
    typography:{
      allVariants:{
          color:"#c2c2c2"
      }
    },
    palette:{
        primary:{
            main: "#2a2a2a",
            light:"#565656"
        },
        secondary:{
            main:"#c03b1d"
        },
        error:{
            main:"#a41515"
        },
        warning:{
            main:"#c5aa1d"
        },
        info:{
            main:"#085881"
        },
        success:{
            main:"#15751b"
        }
    }
});

const MainTemplate = ({children})=>{
    return(
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    {children}
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainTemplate
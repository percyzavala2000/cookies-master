import { useEffect, useState } from 'react';
import type { AppContext, AppProps } from 'next/app'
import '../styles/globals.css'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { darkTheme,lightTheme,customTheme } from '../themes'
import Cookies from 'js-cookie';


interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps,theme="dark" }: Props) {

  //const { theme} = rest;
  const [currenTheme, setCurrenTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme");
    
    const themeToUse:Theme = cookieTheme === "custom" ? customTheme : cookieTheme === "dark" ? darkTheme : lightTheme;
    setCurrenTheme(themeToUse);
    
  }, []);
  

  return (
    <ThemeProvider theme={currenTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

/* MyApp.getInitialProps = async (appContext:AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const {theme}= appContext.ctx.req? (appContext.ctx.req as any).cookies : {theme:"light"}

  const isValid = ["light", "dark", "custom"];

  return {
      theme: isValid.includes(theme) ? theme : "light"
   }
  
} */

export default MyApp

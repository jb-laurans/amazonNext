import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Typography,
  Container,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
  Badge,
} from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import useStyles from '../utils/style';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

export default function Layout({ title, children, description }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
  const theme = createTheme({
    overrides: {
      MuiSwitch: {
        switchBase: {
          // Controls default (unchecked) color for the thumb
          color: '#ccc',
        },
        colorSecondary: {
          '&$checked': {
            // Controls checked color for the thumb
            color: '#8763F4',
          },
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 0.3,
          backgroundColor: '#fff',
          '$checked$checked + &': {
            // Controls checked color for the track
            opacity: 0.7,
            backgroundColor: '#8763F4',
          },
        },
      },
    },
    typography: {
      h1: {
        fontSize: '1.6',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });

  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  const { t } = useTranslation('common');
  return (
    <div>
      <Head>
        <title> {title ? `${title} - Next Amazona` : 'Next Amazona'}</title>
        {description && <meta name="description" conten={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>amazona</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/" locale="en">
                {/* <CardMedia component="img" image="/images/portu.jpg"></CardMedia> */}
                <a>
                  <Image
                    src="/images/portugal.png"
                    alt="Picture of the author"
                    width={25}
                    height={25}
                  />
                  Port
                </a>
              </NextLink>
              <NextLink href="/" locale="fr">
                {/* <CardMedia component="img" image="/images/portu.jpg"></CardMedia> */}
                <a>
                  <Image
                    src="/images/fr.png"
                    alt="Picture of the author"
                    width={25}
                    height={25}
                  />
                  Fr
                </a>
              </NextLink>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      {t('header_cart')}
                    </Badge>
                  ) : (
                    t('header_cart')
                  )}
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>{t('header_login')}</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All right reserved</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}

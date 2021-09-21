import React from 'react';
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
} from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import useStyles from '../utils/style';

export default function Layout({ title, children, description }) {
  const theme = createTheme({
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
      type: 'light',
      primary: {
        main: '#f0c000',
      },
      seconday: {
        main: '#208080',
      },
    },
  });

  const classes = useStyles();
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
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
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

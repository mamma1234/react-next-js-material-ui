/*
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

const styles = {
    layout: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    header: {
        height: 60,
    },
    main: {
        flex: 1,
    },
    footer: {
        height: 60,
    },
    divider: {
        margin: '0 8px',
    },
}

export default class RootApp extends App {
    render() {
        const { Component, ...other } = this.props;
        return (
            <Container>
                <Head>
                    <title>Static Website</title>
                </Head>
                <div style={styles.layout}>
                    <header style={styles.header}>
                        <Link href="/"><a>Home</a></Link>
                        <span style={styles.divider}>|</span>
                        <Link href="/post"><a>Post</a></Link>
                        <span style={styles.divider}>|</span>
                        <Link href="/about"><a>About</a></Link>
                    </header>
                    <main style={styles.main}>
                        <Component {...other} />
                    </main>
                    <footer style={styles.footer}>Footer</footer>
                </div>
            </Container>
        );
    }
}
*/

import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from '../components/material/Layout';

export default class RootApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, ...other } = this.props;
        return (
            <Container>
                <Head>
                    <title>Static Website</title>
                </Head>
                <CssBaseline />
                <Layout>
                    <Component {...other} />
                </Layout>
            </Container>
        );
    }
}
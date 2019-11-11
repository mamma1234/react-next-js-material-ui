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

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Footer from '../components/material/Footer';
import {muscles, exercises} from './store.js';

export default class RootApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    
    state = {
        exercises
    }

    getExerciseByMuscles(){
        return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
                const {muscles} = exercise

                exercises[muscles] = exercises[muscles]
                ? [...exercises[muscles], exercise] 
                : [exercise]

                return exercises
            }, {})
        )

    }

    render() {
        
//console.log(this.getExerciseByMuscles())

        const { Component, ...other } = this.props;

        //const exercises = this.getExerciseByMuscles()
        const exercises = this.getExerciseByMuscles()

        return (
            <Container>
                <Head>
                    <title>Static Website</title>
                </Head>
                <CssBaseline />
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" >
                            News
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                    <Component {...other} exercises={exercises} />
                    <Footer muscles={muscles}/>

            </Container>


        );
    }
}
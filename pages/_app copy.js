import App, { Container } from 'next/app';
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Helmet from 'react-helmet';
import moment from 'moment';

import Layout from '../components/Layout';
import '../styles/index.less';

moment.locale('ko');

Router.events.on('routeChangeStart', (url) => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class RootApp extends App {
    render() {
        const { Component, ...other } = this.props;
        return (
            <Container>
                <Helmet title="Dev.log" />
                <Layout {...other} {...this.state}>
                    <Component {...other} {...this.state} />
                </Layout>
            </Container>
        );
    }
}
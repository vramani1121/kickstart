import { process_params } from 'express/lib/router';
import React from 'react';
import Header from './Header';
import Head from 'next/head'
import {Container} from 'semantic-ui-react';

export default props => {
    return(
        <Container>
        <head>
        <link

rel="stylesheet"

href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"

></link>
        </head>
        <Header/>
            {props.children}
        </Container>
       
    );
};
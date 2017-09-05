// @flow

import React from 'react';
import Head from 'next/head';

import Menu from '../navbar/navbar';

const header = ({ title }: { title: string }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    </Head>
    <Menu />
  </div>
);

export default header;

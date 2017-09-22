// @flow

import React from 'react';
import Head from 'next/head';

import Menu from '../navbar/navbar';

const header = ({ title }: { title: string }) => (
  <div>
    <Head>
      <title>{ title }</title>
    </Head>
    <style>{`
      body {
        margin: 0;
      }
    `}</style>
    <Menu />
  </div>
);

export default header;

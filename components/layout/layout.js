// @flow

import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import Head from 'next/head';
import Grid from 'material-ui/Grid';

import Menu from '../navbar/navbar';

const styles = () => ({
  root: {
    padding: '0 20px',
    marginTop: 30,
    flexGrow: 1,
  },
});

function layout({
  title,
  classes,
  children,
}: {
  title: string,
  classes: any,
  children: React.Node,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style>{`
      body {
        margin: 0;
      }
    `}</style>
      <Menu title={title} />
      <div className={classes.root}>
        <Grid container spacing={24}>
          {children}
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(layout);

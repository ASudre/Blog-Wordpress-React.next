// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Layout from '../components/layout/layout';

const styles = () => ({
  root: {
    padding: '0 20px',
    marginTop: 30,
    flexGrow: 1,
  },
  paper: {
    width: '100%',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

type Props = {
  classes: any,
}

function About(props: Props) {
  return (
    <Layout title={'About'}>
      <Paper className={props.classes.paper}>
        Pan African Music 2017
      </Paper>
    </Layout>
  );
}

export default withStyles(styles)(About);

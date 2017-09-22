// @flow
/* eslint-disable react/no-danger */

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = () => ({
  paper: {
    padding: '5px 20px',
    height: 150,
  },
});

type Props = {
  classes: any,
  title: string,
}
function Post(props: Props) {
  const classes = props.classes;
  return (
    <Paper className={classes.paper} >
      <div dangerouslySetInnerHTML={{ __html: props.title }} />
    </Paper>
  );
}

export default withStyles(styles)(Post);

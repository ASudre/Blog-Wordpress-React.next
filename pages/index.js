// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import { type Post } from '../types/posts';

import Head from '../components/header/header';
import PostComponent from '../components/post/post';

import getPosts from '../services/wordpressAPIService';

type Props = {
  posts: Post[],
  classes: any,
}

const styles = () => ({
  root: {
    padding: '0 20px',
    marginTop: 30,
    flexGrow: 1,
  },
});

class Posts extends React.Component<Props> {
  static async getInitialProps() {
    const posts = await getPosts();
    return { posts };
  }

  render() {
    const { posts, classes } = this.props;
    return (
      <div>
        <Head title={'Posts'} />
        <div className={classes.root}>
          <Grid container spacing={24}>
            { posts ? posts.map(post => (
              <Grid xs={12} sm={6} key={post.id} item>
                <PostComponent
                  title={post.title.rendered}
                  content={post.content.rendered}
                />
              </Grid>
            )) : null}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Posts);

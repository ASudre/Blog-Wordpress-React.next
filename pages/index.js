// @flow

import React from 'react';
import Grid from 'material-ui/Grid';

import { type Post } from '../types/posts';

import Layout from '../components/layout/layout';
import PostComponent from '../components/post/post';

import getPosts from '../services/wordpressAPIService';

type Props = {
  posts: Post[],
  classes: any,
}

class Posts extends React.Component<Props> {
  static async getInitialProps() {
    const posts = await getPosts();
    return { posts };
  }

  render() {
    const { posts } = this.props;
    return (
      <Layout title={'Home'}>
        { posts ? posts.map(post => (
          <Grid xs={12} sm={6} key={post.id} item>
            <PostComponent
              title={post.title.rendered}
              content={post.content.rendered}
            />
          </Grid>
        )) : null}
      </Layout>
    );
  }
}

export default Posts;

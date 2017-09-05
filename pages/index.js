// @flow

import React from 'react';
import { Button } from 'reactstrap';

import type { Post } from '../types/posts';

import Head from '../components/header/header';
import getPosts from '../services/wordpressAPIService';

type Props = {
  posts: Post[],
}

export default class extends React.Component<Props> {
  static async getInitialProps() {
    const posts = await getPosts();
    return { posts };
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <Head title={'Posts'} />
        <Button color="danger">Danger!</Button>
        <h1>Posts</h1>
        <ul>
          { posts ? posts.map(post => (
            <li style={{ color: 'black' }} key={post.id}>{post.title.rendered}</li>
          )) : null}
        </ul>
      </div>
    );
  }
}

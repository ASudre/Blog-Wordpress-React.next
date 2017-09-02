// @flow

import React from 'react'
// $FlowIgnore unknown by flow
import 'isomorphic-fetch'

import type { Post } from '../types/posts';
const WORDPRESS_URL = 'http://localhost:8080';

type Props = {
  posts: Post[],
}

export default class extends React.Component<Props> {
  static async getInitialProps () {
    const res = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/posts`)
    const json = await res.json()
    return { posts: json }
  }

  render () {
    const { posts } = this.props
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          { posts ? posts.map(post => (
            <li style={{ color: 'black' }} key={post.id}>{post.title.rendered}</li>
          )) : null}
        </ul>
      </div>
    )
  }
}

import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class MyPage extends React.Component {
  static async getInitialProps (): string {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://localhost:8080/wp-json/wp/v2/posts')
    const json = await res.json()
    return { posts: json }
  }

  render () {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {this.props.posts.map(post => (
            <li style={{ color: 'black' }} key={post.id}>{post.title.rendered}</li>
          ))}
        </ul>
      </div>
    )
  }
}

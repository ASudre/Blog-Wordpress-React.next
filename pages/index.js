import React from 'react'
import 'isomorphic-fetch'

export default class MyPage extends React.Component {
  static async getInitialProps (): string {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://localhost:8080/wp-json/wp/v2/posts')
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

// @flow

/* global fetch */

// eslint-disable-next-line import/no-extraneous-dependencies
import 'isomorphic-fetch';

const WORDPRESS_URL = 'http://localhost:8080';

export default async function getPosts() {
  const res = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/posts`);
  return res.json();
}

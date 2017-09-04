// @flow

import request from './../utils/request';

const WORDPRESS_URL = 'http://localhost:8080';

export default async function getPosts() {
  return request(`${WORDPRESS_URL}/wp-json/wp/v2/posts`);
}

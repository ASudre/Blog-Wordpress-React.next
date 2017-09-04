// @flow

import type { Post } from '../../types/posts';

import getPosts from '../../services/wordpressAPIService';

jest.mock('./../../utils/request');

describe('services', () => {
  it('wordpressAPIService', async () => {
    const posts: Post[] = await getPosts();
    expect(posts[0].id).toBe(1);
  });
});

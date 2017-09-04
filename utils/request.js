// @flow

// eslint-disable-next-line import/no-extraneous-dependencies
import 'isomorphic-fetch';

export default async function request(url: string) {
  const response = await fetch(url);
  return response.json();
}

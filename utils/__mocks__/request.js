const posts = [{
  id: 1,
  title: {
    rendered: 'Great title',
  },
}];

export default async function request() {
  return Promise.resolve(posts);
}

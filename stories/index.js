import React from 'react';
// eslint-disable-next-line
import { storiesOf } from '@storybook/react';
import MyPage from '../pages';
import NavBar from '../components/navbar/navbar';

storiesOf('Nav bar', module)
  .addDecorator(story => (
    <div>
      {story()}
    </div>
  ))
  .add('without', () => <NavBar />);

storiesOf('Posts list', module)
  .addDecorator(story => (
    <div>
      {story()}
    </div>
  ))
  .add('without', () => <MyPage />)
  .add('with one post', () => <MyPage posts={[{ id: 1, title: { rendered: 'coucou' } }]} />);

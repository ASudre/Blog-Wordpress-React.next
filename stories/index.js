import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MyPage from '../pages';

storiesOf('Posts list', module)
.add('with one post', () => (
  <MyPage posts={[{ id: 1, content: { rendered: 'coucou' } }]}/>
));

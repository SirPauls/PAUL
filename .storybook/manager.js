import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'PAUL',
  brandUrl: 'https://www.sirpauls.com',
  brandImage: '/paul_favicon.svg',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});

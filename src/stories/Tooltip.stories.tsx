
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltip, { TooltipProps } from '../components/Tooltip';
import Button from '../components/Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: StoryFn<TooltipProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  content: 'This is a tooltip',
  position: 'top',
};

export const Top = Template.bind({});
Top.args = {
  content: 'Top tooltip',
  position: 'top',
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: 'Bottom tooltip',
  position: 'bottom',
};

export const Left = Template.bind({});
Left.args = {
  content: 'Left tooltip',
  position: 'left',
};

export const Right = Template.bind({});
Right.args = {
  content: 'Right tooltip',
  position: 'right',
};

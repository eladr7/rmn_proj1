import React, {MouseEvent} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Dummy, DummyProps } from './Dummy';

export default {
  title: 'Example/Dummy',
  component: Dummy,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' }
  }
} as Meta;

export const Template: Story<DummyProps> = (args) => <Dummy {...args} />;
Template.args = {
  label: 'Default text'
}
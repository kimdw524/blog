import type { Meta, StoryObj } from '@storybook/react';

import themeCss from '../../styles/theme.css';
import { button } from './Button.css';

import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '버튼 안에 표시할 내용',
      type: 'string',
    },
    color: {
      description: '버튼의 색상',
      control: 'radio',
      options: Object.keys(themeCss.palette),
    },
    size: {
      description: '버튼의 크기',
      control: 'radio',
      options: Object.keys(button.classNames.variants.size),
    },
    disabled: {
      description:
        '비활성화 여부                                                              ',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

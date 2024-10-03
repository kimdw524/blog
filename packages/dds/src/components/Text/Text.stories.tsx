import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta = {
  title: 'UI/Text',
  component: Text,
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
      description: 'Text 내용',
      control: 'text',
    },
    color: {
      description: '글자 색상',
      control: 'color',
    },
    element: {
      description: 'HTML Element의 종류',
    },
    weight: {
      description: '글자 굵기',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

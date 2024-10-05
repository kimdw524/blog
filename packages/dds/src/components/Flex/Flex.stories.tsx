import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';

const meta = {
  title: 'UI/Flex',
  component: Flex,
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
      table: { disable: true },
    },
    flexDirection: {
      description: 'flex-direction',
      control: 'text',
    },
    gap: {
      description: 'gap',
      control: 'text',
    },
    alignItems: {
      description: 'align-items',
      control: 'text',
    },
    justifyContent: {
      description: 'justify-content',
      control: 'text',
    },
    margin: {
      description: 'margin',
      control: 'text',
    },
    padding: {
      description: 'padding',
      control: 'text',
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <div>1</div>
        <div>2</div>
      </>
    ),
  },
};

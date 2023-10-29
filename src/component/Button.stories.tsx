import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title:  'Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
        control: {type:' select'},
        option: ['primary', 'secondary']
    }, 
    }
  }



export default meta; 

type Story = StoryObj<typeof Button>;

  export const Primary: Story = {
    args: {
      variant: 'primary'
    },
  };

  export const secondary: Story = {
    args: {
      variant: 'secondary'
    },
  };

  export const destructive: Story = {
    args: {
      variant: 'destructive'
    },
  };

  export const ghost: Story = {
    args: {
      variant: 'ghost'
    },
  };

  export const Another: Story = {
    render: (args) => <button {...
        args}/>
  }


  

import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@kierico-ui/react'

/** configuração global do avatar */
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Kierico.png',
    alt: 'Kiérico Souza',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

/** exportar uma variação do avatar */
export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'sm',
  },
}

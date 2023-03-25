import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@kierico-ui/react'

/** configuração global do botão */
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Kierico.png',
    alt: 'Kiérico Souza',
  },
} as Meta<AvatarProps>

/** exportar uma variação do botão */
export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@kierico-ui/react'

/** configuração global do botão */
export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

/** exportar uma variação do botão */
export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}

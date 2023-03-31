import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@kierico-ui/react'

/** configuração global do texto */
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Josué 1.9 "Não te mandei eu? Esforça-te, e tem bom ânimo; não temas, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares.”',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

/** exportar uma variação do texto */
export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children:
      'Josué 1.9 "Não te mandei eu? Esforça-te, e tem bom ânimo; não temas, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares.”',
    as: 'strong',
  },
}

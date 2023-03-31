import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@kierico-ui/react'
import { ArrowRight } from 'phosphor-react'

/** configuração global do botão */
export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

/** exportar uma variação do botão */
export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

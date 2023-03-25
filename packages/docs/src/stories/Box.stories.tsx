import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@kierico-ui/react'

/** configuração global do botão */
export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

/** exportar uma variação do botão */
export const Primary: StoryObj<BoxProps> = {}

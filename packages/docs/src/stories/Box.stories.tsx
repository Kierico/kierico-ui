import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@kierico-ui/react'

/** configuração global do botão */
export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
} as Meta<BoxProps>

/** exportar uma variação do botão */
export const Primary: StoryObj<BoxProps> = {}

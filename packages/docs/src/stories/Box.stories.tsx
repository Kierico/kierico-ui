import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@kierico-ui/react'

/** configuração global da box */
export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
} as Meta<BoxProps>

/** exportar uma variação da box */
export const Primary: StoryObj<BoxProps> = {}

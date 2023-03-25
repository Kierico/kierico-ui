import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',

  variants: {
    size: {
      sm: {
        width: '$10',
        height: '$10',
      },
      md: {
        width: '$12',
        height: '$12',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit', // herda os valores do Pai (AvatarContainer)
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray_600',
  color: '$gray_800',

  svg: {
    width: '$6',
    height: '$6',
  },
})

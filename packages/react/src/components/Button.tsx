import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$green_mid',

        '&:not(:disabled):hover': {
          backgroundColor: '$green_light',
        },

        '&:disabled': {
          backgroundColor: '$gray_200',
        },
      },

      secondary: {
        color: '$green_light',
        border: '2px solid $green_mid',

        '&:not(:disabled):hover': {
          backgroundColor: '$green_mid',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray_200',
          borderColor: '$gray_200',
        },
      },

      tertiary: {
        color: '$gray_100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray_600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'

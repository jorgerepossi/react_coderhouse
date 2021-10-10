import { extendTheme } from '@chakra-ui/react'
import { whiten } from '@chakra-ui/theme-tools'
export { ButtonStyled as Button } from './../components/common/ButtonStyled'

export const theme = extendTheme({
  colors: {
    primary: '#06f',
    secondary: '#f5254f'
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'primary',
          color: '#f9f9f9',
          _hover: {
            bg: whiten('primary', 20)
          }
        },
        _active: {
          bg: '#2477b3',
          transform: 'scale(0.98)',
          borderColor: '#2477b3'
        }
      }
    }
  }
})

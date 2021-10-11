import { extendTheme } from '@chakra-ui/react'
import { whiten } from '@chakra-ui/theme-tools'
export { ButtonStyled as Button } from './../components/common/ButtonStyled'

export const theme = extendTheme({
  colors: {
    base: '#f7f7f8',
    grey: {
      10: 'hsl(240, 7%, 97%)',
      20: 'hsl(240, 7%, 87%)',
      30: 'hsl(240, 7%, 77%)'
    },
    primary: '#06f',
    secondary: '#f7f7f8',
    text: '#7d7c83'
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

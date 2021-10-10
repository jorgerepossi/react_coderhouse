import { FC } from 'react'
import { MdPayment, MdSupportAgent, MdReplay} from 'react-icons/md'
 import {  SimpleGrid, Box, Text } from "@chakra-ui/react"
const services = [
  {
    icon: <MdSupportAgent />,
    title: 'CUSTOMER SUPPORT',
    subtitle: 'Need Assistence?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.'
  },
  {
    icon: <MdPayment />,
    title: 'SECURED PAYMENT',
    subtitle: 'Safe & Fast',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.'
  },
  {
    icon: <MdReplay />,
    title: 'RETURNS',
    subtitle: 'Easy & Free',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.'
  }
]

export const ShopServices: FC = (): JSX.Element=> {
    return (
        <SimpleGrid columns={3} padding="50px 0" spacing={5}>
            {services.map(({ title, subtitle, content, icon }) => (
                <Box key={title}
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    padding="20px"
                >
                    <Box
                        fontSize="50"
                        borderRadius="50px"
                        borderColor="#dddddd"
                        borderWidth="1px"
                        padding="20px"> {icon} </Box>
                    <Text fontSize="md">{title}</Text>
                    <Text fontSize="xs">{subtitle}</Text>
                    <Text fontSize="sm"> {content}</Text>
                    
                   
                    </Box>
            ))}
            
        
    </SimpleGrid>
    )
}

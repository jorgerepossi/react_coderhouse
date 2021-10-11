import { FC } from 'react'
import { MdPayment, MdSupportAgent, MdReplay } from 'react-icons/md'
import { SimpleGrid, Box, Text, Container, Stack } from '@chakra-ui/react'
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

export const ShopServices: FC = (): JSX.Element => {
  return (
   
      <Stack bg="base"  width="100%">
<SimpleGrid
       
        borderRadius={10}
              columns={[1, 1, 3]}
              margin="0px auto"
        maxWidth='container.xl'
          padding="50px 0"
          spacing={5}
      >
        {services.map(({ title, subtitle, content, icon }) => (
          <Box
            key={title}
            alignItems="center"
            borderRadius="20px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding="20px"
          >
            <Box
              bg="#ffffff"
              borderColor="#f9f9f9"
              borderRadius="50px"
              borderWidth="1px"
              color="primary"
              fontSize="50"
              marginBottom="20px"
              padding="20px"
            >
              {icon}
            </Box>
            <Text fontSize="md" fontWeight="bold" mb={2}>
              {title}
            </Text>
            <Text fontSize="xs" mb={2}>
              {subtitle}
            </Text>
            <Text color="text" fontSize="sm" textAlign="center">
              {content}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      </Stack>
   
  )
}

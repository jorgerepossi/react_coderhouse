import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { ImFacebook, ImTwitter, ImLinkedin2, ImInstagram } from 'react-icons/im'
const socialLinks = [
  {
    id: 'nkjlai880199poshnkjwsdcv852',
    name: 'facebook',
    icon: <ImFacebook />,
    link: 'https://www.facebook.com/'
  },
  {
    id: 'nkjlai880199poshnkjwsdcv853',
    name: 'facebook',
    icon: <ImTwitter />,
    link: 'https://www.twitter.com/'
  },
  {
    id: 'nkjlai880199poshnkjwsdcv854',
    name: 'facebook',
    icon: <ImLinkedin2 />,
    link: 'https://www.linkedin.com/'
  },
  {
    id: 'nkjlai880199poshnkjwsdcv855',
    name: 'facebook',
    icon: <ImInstagram />,
    link: 'https://www.instagram.com/'
  }
]

export const SocialMedia = () => {
  return (
    <Flex>
      {socialLinks.map(({ id, name, icon, link }) => (
        <Box
          key={id}
          alignItems="center"
          borderRadius="50px"
          borderWidth="1px"
          display="flex"
          h="40px"
          justifyContent="center"
          marginRight="10px"
          w="40px"
        >
          <a href={link} rel="noopener noreferrer" target="_blank">
            {' '}
            {icon}{' '}
          </a>
        </Box>
      ))}
    </Flex>
  )
}

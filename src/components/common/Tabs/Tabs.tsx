import { FC } from 'react'
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Box
} from '@chakra-ui/react'
interface Props {}
export type PropTypeElement = {}
export const TabsContent: FC<Props> = () => {
  return (
    <Box width="100%" height="auto">
      <Tabs>
        <TabList>
          <Tab>
            <Text fontSize="12px"> DETAILS</Text>
          </Tab>
          <Tab>
            <Text fontSize="12px">REVIEWS </Text>
          </Tab>
          <Tab>
            <Text fontSize="12px">CUSTOM TAB </Text>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text fontSize="15" color="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat.
            </Text>
            <Text fontSize="15" color="text">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="15" color="text">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text fontSize="15" color="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="15" color="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat.
            </Text>
            <Text fontSize="15" color="text">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
export default TabsContent

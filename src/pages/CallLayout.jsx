import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import Call from '../components/Call'

const randomNum = 6;

export default function CallLayout() {
  return (
    <div style={{backgroundColor: 'black', height: 'auto'}}>
      {/* Uncomment this section if you want to use the inline style */}
      {/* <div style={{
        background: 'radial-gradient(100% 225% at 100% 0%, #FAFF00 0%, #000000 100%), linear-gradient(235deg, #DB00FF 0%, #000000 100%), linear-gradient(45deg, #241E92 0%, #241E92 40%, #5432D3 40%, #5432D3 50%, #7B6CF6 50%, #7B6CF6 70%, #E5A5FF 70%, #E5A5FF 100%), linear-gradient(180deg, #01024E 0%, #01024E 43%, #543864 43%, #543864 62%, #8B4367 62%, #8B4367 80%, #FF6464 80%, #FF6464 100%)',
        backgroundBlendMode: 'overlay, hard-light, overlay, normal',
        height: '100vh'
      }}> */}
      <Tabs variant='enclosed' >
        <TabList paddingTop={10}>
          <Tab>Call</Tab>
          <Tab>Chat</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Call numDivs={randomNum} />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* </div> */}
    </div>
  )
}

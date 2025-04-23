// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Todos from "./tabs/Todos";
import Contacts from "./tabs/Contacts";
import PhotosSearch from "./tabs/PhotosSearch";

function App() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Todos</Tab>
          <Tab>Contacts</Tab>
          <Tab>Photos</Tab>
        </TabList>
        <TabPanel>
          <Todos />
        </TabPanel>
        <TabPanel>
          <Contacts />
        </TabPanel>
        <TabPanel>
          <PhotosSearch />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;

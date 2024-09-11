import React, { useState } from "react";
import Sidebar from "./sidebars/Sidebar";
import Sidebarr from "./sidebars/sidebarr";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./approuter";
import { Box } from "@chakra-ui/react";
function App() {
  const [selectedIndex, setSeletedIndex] = useState(-1);
  return (
    <ChakraProvider>
        <Box
          h={"100vh"}
          display={"flex"}
          flexDirection={{base : "column", md: "row"}}
          overflow={"hidden"}
          w={"full"}
        >
          <Sidebar selectedIndex={selectedIndex} setSelectedIndex={setSeletedIndex}/>
          <Sidebarr selectedIndex={selectedIndex} setSelectedIndex={setSeletedIndex}/>
          
          <AppRouter />
        </Box>
    </ChakraProvider>
  );
}

export default App;

// {
//   "name": "Income Tax",
//   "image": "it.png",
//   "link": "/incometax"
// },
// {
//   "name": "Mutual Fund",
//   "image": "mf.png",
//   "link": "/mutualfund"
// },

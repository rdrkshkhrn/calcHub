import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./sidebars/Sidebar";
import Sidebarr from "./sidebars/sidebarr";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./approuter";
import { Box } from "@chakra-ui/react";
function App() {
  const [selectedIndex, setSeletedIndex] = useState(-1);
  return (
    <ChakraProvider>
      <Router>
        <Box
          h={"100vh"}
          display={"flex"}
          flexDirection={{base : "column", md: "row"}}
          overflow={"hidden"}
          w={"full"}
        >
          <Sidebarr selectedIndex={selectedIndex} setSelectedIndex={setSeletedIndex}/>
          <Sidebar selectedIndex={selectedIndex} setSelectedIndex={setSeletedIndex}/>
          <AppRouter />
        </Box>
      </Router>
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

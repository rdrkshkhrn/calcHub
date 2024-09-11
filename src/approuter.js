import React from 'react'
import {Routes,Route} from "react-router-dom";
import Sip from "./components/sips/sip"
import FixedDeposit from "./components/fixed_deposit";
import Emi from "./components/emi";
import SWPCalculator from "./components/swp";
import IncomeTax from "./components/income_tax";
import MutualFund from "./components/mutual_fund";
import Gst from "./components/gst";
import Homepage from "./components/Homepage";
import { Box } from '@chakra-ui/react';
 
function AppRouter() {
  return (
    <Box w={"full"} overflow={"auto"}>
      <Routes>
        <Route path='/sip' element = {<Sip/>}/>
        <Route path='/mutualfund' element = {<MutualFund/>}/>
        <Route path='/emi' element = {<Emi/>}/>
        <Route path='/swp' element = {<SWPCalculator/>}/>
        <Route path='/fixedDeposit' element = {<FixedDeposit/>}/>
        <Route path='/incometax' element = {<IncomeTax/>}/>
        <Route path='/gst' element = {<Gst/>}/>
        <Route path='/' element = {<Homepage/>}/>
    </Routes>
    </Box>
  )
}

export default AppRouter
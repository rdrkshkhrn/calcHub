import React, { useState } from "react";
import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import CalculateSip from "../../Functions/CalculateSip";
import SliderInputSync from "../../SliderInputSync";

function InvestedAmount() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [timePeriod, setTimePeriod] = useState(5);
  const [rateValue, setRateValue] = useState(5);

  const { total_investment, finalAmount } = CalculateSip(
    monthlyInvestment,
    timePeriod,
    rateValue
  );
  return (
    <Box>
      <Box display={"flex"} flexDir={"column"} gap={2} my={4}>
        <Text color={'grey'}>Monthly investment (in rupees)</Text>
        <SliderInputSync
          value={monthlyInvestment}
          setValue={setMonthlyInvestment}
          mn={5000}
          mx={10000000}
        />
      </Box>
      <Box display={"flex"} flexDir={"column"} gap={2}>
        <Text color={'grey'}>Time period (in years)</Text>
        <SliderInputSync
          value={timePeriod}
          setValue={setTimePeriod}
          mn={1}
          mx={60}
        />
      </Box>
      <Box display={"flex"} flexDir={"column"} gap={2} w={"full"} my={4}>
        <Text color={'grey'}>Expected Annual Return (%)</Text>
        <SliderInputSync
          value={rateValue}
          setValue={setRateValue}
          mn={1}
          mx={30}
        />
      </Box>
      {/* <Divider borderColor={"gray.400"} /> */}
      <Box p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        bg={"white"}
        mx="auto"
        mt={5}
        w={'full'}>
        <Flex justifyContent={"space-between"} my={2}>
          <Text>Total invested amount</Text>
          <Text>₹ {total_investment}</Text>
        </Flex>
        <Divider/>
        <Flex justifyContent={"space-between"} my={2}>
          <Text>Interest earned</Text>
          <Text>₹ {finalAmount - total_investment}</Text>
        </Flex>
        <Divider/>
        <Flex justifyContent={"space-between"} my={2}>
          <Text>Final amount</Text>
          <Text>₹ {finalAmount}</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default InvestedAmount;

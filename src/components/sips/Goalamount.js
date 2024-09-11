import React, { useState } from "react";
import { Box, Flex, Text, Divider } from "@chakra-ui/react";

import CalculateMonthlyInvestment from "../../Functions/CalculateMonthlyInvestment";
import SliderInputSync from "../../SliderInputSync";
function GoalAmount() {
  const [goalAmount, setGoalAmount] = useState(1000000);
  const [timePeriod, setTimePeriod] = useState(5);
  const [rateValue, setRateValue] = useState(8);

  const { monthlyInvestment, Total_investment, Interest_earned } =
    CalculateMonthlyInvestment(goalAmount, rateValue, timePeriod);

  return (
    <Box>
      <Box display={"flex"} flexDir={"column"} gap={2} my={4}>
        <Text color={"grey"}>Goal Amount (in rupees)</Text>
        <SliderInputSync
          value={goalAmount}
          setValue={setGoalAmount}
          mn={5000}
          mx={10000000}
        />
      </Box>

      <Box display={"flex"} flexDir={"column"} gap={2}>
        <Text color={"grey"}>Time period (in years)</Text>
        <SliderInputSync
          value={timePeriod}
          setValue={setTimePeriod}
          mn={1}
          mx={60}
        />
      </Box>
      <Box display={"flex"} flexDir={"column"} gap={2} w={"full"} my={4}>
        <Text color={"grey"}>Expected Annual Return (%)</Text>
        <SliderInputSync
          value={rateValue}
          setValue={setRateValue}
          mn={1}
          mx={30}
        />
      </Box>
      {/* <Divider borderColor={"gray.400"}/> */}
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        bg={"white"}
        mx="auto"
        mt={5}
        w={"full"}
      >
        <Flex justifyContent={"space-between"} my={2}>
          <Text>Required Monthly Investment:</Text>
          <Text>₹ {monthlyInvestment}</Text>
        </Flex>
        <Divider/>
        <Flex justifyContent={"space-between"} my={3}>
          <Text>Total Investment:</Text>
          <Text>₹ {Total_investment}</Text>
        </Flex>
        <Divider/>
        <Flex justifyContent={"space-between"} my={2}>
          <Text>Interest earned:</Text>
          <Text>₹ {Interest_earned}</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default GoalAmount;

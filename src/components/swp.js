import React, { useState } from "react";
import { Box, Text, Flex, Heading, Divider } from "@chakra-ui/react";
import SliderInputSync from "../SliderInputSync";
import CalculateSWP from "../Functions/CalculateSWP";

function SWPCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(1000000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(5000);
  const [annualRate, setAnnualRate] = useState(8);
  const [timePeriod, setTimePeriod] = useState(5);

  const { totalWithdrawn, remainingAmount } = CalculateSWP(
    totalInvestment,
    annualRate,
    timePeriod,
    monthlyWithdrawal
  );

  return (
    <Box
      maxWidth={'900px'}
      p={"2rem"}
      fontWeight={"medium"}
      h={"full"}
      minW={"sm"}
    >
      <Heading textAlign={"center"} textDecoration={"underline"} mb={"1rem"} fontWeight={"semibold"}>
        <Text fontSize={"2xl"}>SWP Calculator</Text>
      </Heading>
      <Box my={4}>
        <Text color={"grey"} m={2}>Total Investment</Text>
        <SliderInputSync
          value={totalInvestment}
          setValue={setTotalInvestment}
          mn={100000}
          mx={5000000}
        />
      </Box>
      <Box mb={4}>
        <Text color={"grey"} m={2}>Monthly Withdrawal</Text>
        <SliderInputSync
          value={monthlyWithdrawal}
          setValue={setMonthlyWithdrawal}
          mn={1000}
          mx={100000}
        />
      </Box>

      <Box mb={4}>
        <Text color={"grey"} m={2}>Expected Annual Return Rate (%)</Text>
        <SliderInputSync
          value={annualRate}
          setValue={setAnnualRate}
          mn={1}
          mx={20}
        />
      </Box>

      <Box mb={8}>
        <Text color={"grey"} m={2}>Time Period (Years)</Text>
        <SliderInputSync
          value={timePeriod}
          setValue={setTimePeriod}
          mn={1}
          mx={30}
        />
      </Box>

      {remainingAmount > 0 ? (
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
          <Flex justifyContent="space-between" mb={2}>
            <Text>Total amount:</Text>
            <Text>₹{totalWithdrawn + remainingAmount}</Text>
          </Flex>
          <Divider/>
          <Flex justifyContent="space-between" my={3}>
            <Text>Total Withdrawal:</Text>
            <Text>₹{totalWithdrawn}</Text>
          </Flex>
          <Divider/>
          <Flex justifyContent="space-between" mt={2}>
            <Text>Remaining amount:</Text>
            <Text>₹{remainingAmount}</Text>
          </Flex>
        </Box>
      ) : (
        <Text>Total monthly withdrawal is greater than Invested amount.</Text>
      )}
    </Box>
  );
}

export default SWPCalculator;

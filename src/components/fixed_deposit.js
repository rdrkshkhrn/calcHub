import React, { useState } from "react";
import { Box, VStack, HStack, Text, Icon, Heading, Flex, Divider } from "@chakra-ui/react";
import SliderInputSync from "../SliderInputSync";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaWallet,
  FaRupeeSign,
} from "react-icons/fa"; // Importing icons
import CalculateCompoundInterest from "../Functions/CalculateCompoundInterest";

function FixedDeposit() {
  const [investmentValue, setInvestmentValue] = useState(5000);
  const [rateValue, setRateValue] = useState(1);
  const [timeValue, setTimeValue] = useState(1);

  const { total_amount, total_interest } = CalculateCompoundInterest(
    investmentValue,
    rateValue,
    timeValue
  );

  return (
    <Flex direction={'column'} maxW={'900px'} borderRadius={"md"}  p={"2rem"}fontWeight={"medium"} minW={"sm"}>
      <Box display={"flex"} justifyContent={"center"} mb={"1rem"}>
      <Heading textAlign={"center"} textDecoration={"underline"} mb={"1rem"} fontWeight={"semibold"}>
        <Text fontSize={"2xl"}>FD Calculator</Text>
      </Heading>
      </Box>
      <Box my={"1rem"} fontWeight={"medium"}>
        <Text pl={"0.5rem"} mb={"0.25rem"} color={"grey"}>
          Total investment
          <Text as={"span"} mx={"0.5rem"}>
            (in rupees)
          </Text>
        </Text>
        <SliderInputSync
          value={investmentValue}
          setValue={setInvestmentValue}
          mn={5000}
          mx={1000000}
        />
      </Box>
      <Box my={"1rem"} fontWeight={"medium"}>
        <Text pl={"0.5rem"} mb={"0.25rem"} color={"grey"}>
          Rate of interest
          <Text as={"span"}> (p.a)</Text>
        </Text>
        <SliderInputSync
          value={rateValue}
          setValue={setRateValue}
          mn={1}
          mx={15}
        />
      </Box>
      <Box my={"1rem"} fontWeight={"medium"}>
        <Text pl={"0.5rem"} mb={"0.25rem"} color={"grey"}>
          Time period
          <Text as={"span"} mx={"0.5rem"} color={"grey"}>
            (in years)
          </Text>
        </Text>
        <SliderInputSync
          value={timeValue}
          setValue={setTimeValue}
          mn={1}
          mx={25}
        />
      </Box>
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        bg={"white"}
        mx="auto"
        mt={5}
        w={'full'}
      >
        <VStack spacing={3} align="stretch">
          <HStack justifyContent="space-between" spacing={4}>
            <HStack>
              <Icon as={FaMoneyBillWave} color="teal.500" boxSize={5} />
              <Text >Invested Amount</Text>
            </HStack>
            <Text >
              {" "}
              <Icon as={FaRupeeSign} boxSize={"0.75em"} />
              {investmentValue}
            </Text>
          </HStack>
          <Divider/>
          <HStack justifyContent="space-between" spacing={4}>
            <HStack>
              <Icon as={FaChartLine} color="blue.500" boxSize={5} />
              <Text >Est. Returns</Text>
            </HStack>
            <Text >
              {" "}
              <Icon as={FaRupeeSign} boxSize={"0.75em"} />
              {total_interest}
            </Text>
          </HStack>
          <Divider/>
          <HStack justifyContent="space-between" spacing={4}>
            <HStack>
              <Icon as={FaWallet} color="green.500" boxSize={5} />
              <Text >Total Value</Text>
            </HStack>
            <Text>
              {" "}
              <Icon as={FaRupeeSign} boxSize={"0.75em"} />
              {total_amount}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
}

export default FixedDeposit;
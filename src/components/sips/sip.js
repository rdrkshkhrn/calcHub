import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  Box,
  Heading,
  Text,
  Stack,
  Divider,
} from "@chakra-ui/react";
import InvestedAmount from "./Investedamount";
import GoalAmount from "./Goalamount";

function Sip() {
  const [selectedValue, setSelectedValue] = useState("Invested_amount");

  return (
    <Box
      minW={"sm"}
      maxW={"900px"}
      p={"2rem"}
      bgColor={"white"}
      fontWeight={"medium"}
      h={"full"}
      mb={{base : "4rem",md:"none"}}
    >
      <Heading textAlign={"center"} textDecoration={"underline"} mb={"1.5rem"} fontWeight={"semibold"}>
        <Text fontSize={"2xl"}>SIP Calculator</Text>
      </Heading>
      <RadioGroup
        value={selectedValue}
        onChange={(value) => setSelectedValue(value)}
        mb={"1rem"}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 2, lg: 10 }}
        >
          <Radio
            value="Invested_amount"
            colorScheme="blue"
            borderColor={"gray.400"}
          >
            <Text fontSize={"md"}>
            I know my investment amount
            </Text>
          </Radio>
          <Radio
            value="Goal_amount"
            colorScheme="blue"
            borderColor={"gray.400"}
          >
            <Text fontSize={"md"}>
            I know my goal amount
            </Text>
          </Radio>
        </Stack>
      </RadioGroup>
      <Divider borderColor={"gray.400"} my={8}/>
      <Box>
        {selectedValue === "Invested_amount" ? (
          <InvestedAmount />
        ) : (
          <GoalAmount />
        )}
      </Box>
    </Box>
  );
}

export default Sip;

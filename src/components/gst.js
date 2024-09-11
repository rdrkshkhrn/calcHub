import React, { useState } from "react";
import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  Select,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Divider,
} from "@chakra-ui/react";
import SliderInputSync from "../SliderInputSync";

const Gst = () => {
  const [gstType, setGstType] = useState("excluding");
  const [totalAmount, setTotalAmount] = useState(25000);
  const [taxSlab, setTaxSlab] = useState(12);

  const gstAmount =
    gstType === "excluding"
      ? (totalAmount * taxSlab) / 100
      : totalAmount - totalAmount / (1 + taxSlab / 100);
  const postGstAmount =
    gstType === "excluding" ? totalAmount + gstAmount : totalAmount - gstAmount;

  return (
    <Box
      py={6}
      maxW="900px"
      minW={"sm"}
      h={"full"}
      fontWeight="medium"
      px={"1rem"}
    >
      <Heading textAlign={"center"} textDecoration={"underline"} mb={"1.5rem"} fontWeight={"semibold"}>
        <Text fontSize={"2xl"}>GST Calculator</Text>
      </Heading>
      <RadioGroup onChange={setGstType} value={gstType} mb={4} px={6}>
        <Stack direction="column" spacing={4}>
          <Radio value="excluding">Excluding GST</Radio>
          <Radio value="including">Including GST</Radio>
        </Stack>
      </RadioGroup>
      <Box px={2}>
        <Divider mb={4} bgColor={"gray.600"} />
      </Box>
      <Box p={2} m={2} >
        <Box>
          <Text m={2} color={"grey"}> Total amount (in rupees)</Text>
          <SliderInputSync
            value={totalAmount}
            setValue={setTotalAmount}
            mn={1}
            mx={10000000}
          />
        </Box>
        <FormControl my={6}>
          <FormLabel color={"grey"}> Tax Slab </FormLabel>
          <Select
            value={taxSlab}
            onChange={(e) => setTaxSlab(parseFloat(e.target.value))}
            shadow="md"
            borderRadius={"md"}
            bgColor={"gray.50"}
          >
            <option value={0.25}>0.25%</option>
            <option value={3}>3%</option>
            <option value={5}>5%</option>
            <option value={12}>12%</option>
            <option value={18}>18%</option>
            <option value={28}>28%</option>
          </Select>
        </FormControl>
      </Box>
      <Box px={5}
        pt={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        bg={"white"}
        mx={3}>
        <Flex justifyContent="space-between" mb={2}>
          <Text>Total GST</Text>
          <Text>₹{Math.round(gstAmount)}</Text>
        </Flex>
        <Divider/>
        <Flex justifyContent="space-between" mb={4} mt={2}>
          {gstType === "excluding" ? (
            <Text>Post-GST Amount</Text>
          ) : (
            <Text>Pre-GST Amount</Text>
          )}
          <Text>₹{Math.round(postGstAmount)}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Gst;

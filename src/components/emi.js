import React, { useState } from "react";
import { Box, Text, Heading, Icon, Divider, Input, Checkbox, CheckboxGroup, Stack, Flex} from "@chakra-ui/react";
import SliderInputSync from "../SliderInputSync";
import {
  MdAttachMoney,
  MdAccountBalance,
  MdTrendingUp,
  MdReceipt,
} from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import CalculateTotalInterest from "../Functions/CalculateTotalInterest";
import calculateLoanRepaymentWithExtraEMI from "../Functions/CalculateLoanPayment";

function Emi() {
  const [amountValue, setAmountValue] = useState(50000);
  const [rateValue, setRateValue] = useState(1);
  const [tenureValue, setTenureValue] = useState(1);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [extraEmis, setExtraEmis] = useState("");
  const [lumpSumAmount, setLumpSumAmount] = useState("");
  const [emiIncreasePercentage, setEmiIncreasePercentage] = useState("");

  const handleCheckboxChange = (selectedItems) => {
    setSelectedOptions(selectedItems);
    if (!selectedItems.includes("extraEmis")) {
      setExtraEmis("");
    }
    if (!selectedItems.includes("lumpSum")) {
      setLumpSumAmount("");
    }
    if (!selectedItems.includes("emiIncrease")) {
      setEmiIncreasePercentage("");
    }
  };

  const { monthly_emi, total_interest, total_amount } = CalculateTotalInterest(
    amountValue,
    rateValue,
    tenureValue
  );

  const { month, totalEMIPaid, totalInterestPaid } =
    calculateLoanRepaymentWithExtraEMI(
      amountValue - lumpSumAmount,
      rateValue,
      monthly_emi,
      tenureValue * 12,
      extraEmis,
      emiIncreasePercentage
    );

  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      overflow={"auto"}
      w={"full"}
      minW={"sm"}
    >
      <Flex direction={"column"} flex={1} px="2rem" pt={"2rem"} pb={"1rem"} bg="white" textColor={"grey"}>
        <Box display="flex" justifyContent="center" mb="4">
        <Heading textAlign={"center"} textDecoration={"underline"} mb={"1rem"} fontWeight={"semibold"}>
        <Text fontSize={"2xl"} color={'black'}>EMI Calculator</Text>
      </Heading>
        </Box>
        <Box mb="4">
          <Text mb="1rem" fontWeight="medium">
            Loan Amount
            <Text as={"span"} mx={"0.5rem"}>
              (in rupees)
            </Text>
          </Text>
          <SliderInputSync
            value={amountValue}
            setValue={setAmountValue}
            mn={5000}
            mx={10000000}
          />
        </Box>
        <Box mb="4">
          <Text mb="1rem" fontWeight="medium">
            Rate of Interest
            <Text as={"span"}> (p.a)</Text>
          </Text>
          <SliderInputSync
            value={rateValue}
            setValue={setRateValue}
            mn={1}
            mx={30}
          />
        </Box>
        <Box mb="4">
          <Text mb="1rem" fontWeight="medium">
            Loan Tenure
            <Text as={"span"} mx={"0.5rem"}>
              (in years)
            </Text>
          </Text>
          <SliderInputSync
            value={tenureValue}
            setValue={setTenureValue}
            mn={1}
            mx={30}
          />
        </Box>

        <Box
          mt={2}
          p="4"
          borderRadius="md"
          boxShadow="md"
          backgroundColor="white"
          fontWeight="medium"
          textColor={"black"}
        >
          <Box display="flex" justifyContent="space-between" my="3">
            <Text>
              <Icon as={MdAttachMoney} color="blue.500" mr="2" />
              Monthly EMI
            </Text>
            <Text >
              {" "}
              <Icon as={FaRupeeSign} boxSize={"0.75em"} />
              {monthly_emi}
            </Text>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" my="3">
            <Text>
              <Icon as={MdAccountBalance} color="green.500" mr="2" />
              Principal Amount
            </Text>
            <Text>
              <Icon as={FaRupeeSign} boxSize={"0.75em"} />
              {amountValue}
            </Text>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" my="3">
            <Text>
              <Icon as={MdTrendingUp} color="red.500" mr="2" />
              Total Interest
            </Text>
            <Text >
              <Icon as={FaRupeeSign} boxSize={"0.75em"} />
              {total_interest}
            </Text>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" my="3">
            <Text>
              <Icon as={MdReceipt} color="purple.500" mr="2" />
              Total Amount
            </Text>
            <Text>
              <Icon as={FaRupeeSign} boxSize={"0.75em"} />
              {total_amount}
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex
        direction={"column"}
        flex={1}
        p="6"
        mx={{ base: "none", lg: "auto" }}
        my={{ base: "none", lg: "0.5rem" }}
        backgroundColor="white"
      >
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Prepayment Options
        </Text>

        <CheckboxGroup value={selectedOptions} onChange={handleCheckboxChange}>
          <Stack direction="column">
            <Checkbox value="extraEmis">Number of Extra EMIs per Year</Checkbox>
            <Checkbox value="lumpSum">Lump Sum Prepayment</Checkbox>
            <Checkbox value="emiIncrease">
              Increase EMI Percentage Per Year
            </Checkbox>
          </Stack>
        </CheckboxGroup>

        {selectedOptions.includes("extraEmis") && (
          <Box mt="4">
            <Text fontWeight="bold" mb="2">
              Enter Extra EMIs:
            </Text>
            <Input
              type="number"
              placeholder="Number of extra EMIs"
              value={extraEmis}
              onChange={(e) => setExtraEmis(e.target.value)}
            />
          </Box>
        )}

        {selectedOptions.includes("lumpSum") && (
          <Box mt="4">
            <Text fontWeight="bold" mb="2">
              Enter Lump Sum Amount:
            </Text>
            <Input
              type="number"
              placeholder="Lump sum prepayment amount"
              value={lumpSumAmount}
              onChange={(e) => setLumpSumAmount(e.target.value)}
            />
          </Box>
        )}
        {selectedOptions.includes("emiIncrease") && (
          <Box mt="4">
            <Text fontWeight="bold" mb="2">
              Enter EMI Increase Percentage:
            </Text>
            <Input
              type="number"
              placeholder="EMI increase percentage"
              value={emiIncreasePercentage}
              onChange={(e) => setEmiIncreasePercentage(e.target.value)}
            />
          </Box>
        )}
        {(extraEmis || lumpSumAmount || emiIncreasePercentage) && (
          <Box mt="6">
            <Text fontWeight="bold">new interest :</Text>
            <Text fontSize="lg" color="green.500">
              ₹{totalInterestPaid}
            </Text>

            <Text fontWeight="bold" mt="4">
              New total amount:
            </Text>
            <Text fontSize="lg" color="blue.500">
              ₹{totalEMIPaid}
            </Text>
            <Text fontWeight="bold" mt="4">
              New time:
            </Text>
            <Text fontSize="lg" color="blue.500">
              {month}
              <span> month</span>
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default Emi;

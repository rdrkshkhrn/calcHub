// HomePage.jsx
import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function HomePage() {
  return (
    <Box p={8} width="full" mx={2}>
      <Heading
        as="h1"
        size="2xl"
        mb={6}
        textAlign="center"
        fontFamily="'Poppins', sans-serif"
        textDecoration={"underline"}
      >
        Welcome to CalcHub
      </Heading>
      <Text fontSize="lg" mb={6} textAlign="center">
        Explore our range of calculators designed to simplify your financial
        calculations.
      </Text>
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            EMI Calculator
          </Heading>
          <Text fontSize="md" mb={4}>
            The EMI calculator helps users calculate their monthly installment,
            total interest, and total amount for loans with flexible prepayment
            options.
          </Text>
          <Text fontSize="md" mb={4}>
            Key Features:
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Loan Customization: Allows users to input loan amount, interest
              rate, and tenure to calculate monthly EMI, total interest, and
              total repayment amount.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Prepayment Options: Provides flexibility to choose from extra
              EMIs, lump sum prepayments, or EMI percentage increases to reduce
              the loan duration and total interest.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Real-Time Results: Displays updated EMI, total amount, interest,
              and adjusted loan duration upon user input changes.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Interactive Sliders: Enables easy adjustment of loan parameters
              like amount, rate, and tenure with smooth sliders.
            </ListItem>
          </List>
          <Text fontSize="md" mt={4}>
            This tool helps users effectively plan their loan repayments by
            providing a comprehensive breakdown of EMIs, interest, and total
            repayment with various prepayment options.
          </Text>
        </Box>
        <Divider />
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Fixed Deposit (FD) Calculator
          </Heading>
          <Text fontSize="md" mb={4}>
            This Fixed Deposit (FD) calculator helps users estimate the total
            maturity amount and interest earned based on their investment
            amount, interest rate, and time period.
          </Text>
          <Text fontSize="md" mb={4}>
            Key Features:
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              User Input Flexibility: Allows users to adjust the investment
              amount, interest rate, and time period using interactive sliders.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Real-Time Calculations: Instantly displays the estimated returns
              and total value upon changing inputs.
            </ListItem>
          </List>
          <Text fontSize="md" mt={4}>
            This tool helps users make informed decisions about their fixed
            deposit investments by providing a detailed breakdown of the
            expected returns and total amount upon maturity.
          </Text>
        </Box>
        <Divider />
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            SIP Calculator
          </Heading>
          <Text fontSize="md" mb={4}>
            This SIP (Systematic Investment Plan) calculator allows you to
            choose between two different calculation methods:
          </Text>
          <List spacing={3} mb={4}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              <Text as="span" fontWeight="bold">
                Invested Amount:
              </Text>{" "}
              For users who know the amount they plan to invest regularly over
              time.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              <Text as="span" fontWeight="bold">
                Goal Amount:
              </Text>{" "}
              For users who have a specific financial goal in mind and want to
              determine the amount they need to invest periodically to achieve
              that goal.
            </ListItem>
          </List>
          <Text fontSize="md" mt={4}>
            This tool helps users make informed decisions about their SIP
            investments by providing a quick and easy way to calculate potential
            returns or required contributions based on their financial goals.
          </Text>
        </Box>
        <Divider />
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            SWP Calculator
          </Heading>
          <Text fontSize="md" mb={4}>
            The SWP (Systematic Withdrawal Plan) calculator helps users
            determine the total withdrawals and remaining balance over a
            specific period while withdrawing a fixed amount monthly from their
            investments.
          </Text>
          <Text fontSize="md" mb={4}>
            Key Features:
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Flexible Withdrawals: Allows users to set a monthly withdrawal
              amount to see how long their investment will last.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Growth Simulation: Calculates the remaining amount after a certain
              period based on the expected annual return rate.
            </ListItem>
          </List>
          <Text fontSize="md" mt={4}>
            This tool helps users to efficiently plan their withdrawals to
            manage their cash flows while keeping their investments growing.
          </Text>
        </Box>
        <Divider />
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            GST Calculator
          </Heading>
          <Text fontSize="md" mb={4}>
            This GST (Goods and Services Tax) calculator helps users determine
            the total amount, inclusive or exclusive of GST, based on the
            selected tax slab.
          </Text>
          <Text fontSize="md" mb={4}>
            Key Features:
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Allows users to calculate the GST amount for both "including" and
              "excluding" GST scenarios.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="teal.500" />
              Select Tax Slab: Choose from various GST tax slabs (0.25%, 3%, 5%,
              12%, 18%, 28%) to get accurate results.
            </ListItem>
          </List>
          <Text fontSize="md" mt={4}>
            This tool simplifies the process of calculating GST, making it easy
            for users to understand the impact of taxes on their total amount,
            whether they know the pre-GST or post-GST value.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default HomePage;

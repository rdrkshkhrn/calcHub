import React from "react";
import sidebarItems from "../SidebarItems.json";
import { Box, Flex, Image, Text, Heading, Divider,Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCalculator } from "react-icons/fa";

function Sidebar({
  selectedIndex, setSelectedIndex
}) {
  return (
    <Box display = {{base : "none",md: "flex"}} flexDirection={"column"} bg={"cyan.700"} minW={'260px'} w= "260px" h={"100vh"} p={4} overflow={"auto"}>
      <Tooltip label="Go to homepage" aria-label="Go to homepage">
      <Link as={Link} to="/" textDecoration="none">
        <Flex alignItems={"center"} my={6} justifyContent={"center"}>
          <FaCalculator color="white" size="28px" />
          <Heading
            ml={2}
            fontSize={"2xl"}
            color={"white"}
            fontFamily={"'Poppins', sans-serif"}
           
          >
            CalcHub
          </Heading>
        </Flex>
      </Link>
    </Tooltip>

      {/* Sidebar Items */}
      <Box display={"flex"} flexDirection={"column"} mt={4} >
        {sidebarItems.map((item, index) => (
          <React.Fragment key={index}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              as={Link}
              to={item.link}
              onClick={()=>setSelectedIndex(index)}
              cursor={"pointer"}
      
              mx={2}
              //mb={2}
              p={4}
              bg={selectedIndex===index?'white':'transparent'}
              borderRadius={"md"}
            >
              <Flex display={"flex"} flexDirection={"row"} gap={2} justifyContent={"flex-start"} alignItems={"center"}>
                <Image src={item.image} alt="icon" rounded={"sm"} boxSize={"20px"} />
                <Text color={selectedIndex===index?'black':'white'} fontWeight={"medium"} fontFamily={"'Roboto', sans-serif"}>
                  {item.name}
                </Text>
              </Flex>
            </Box>
            {index < sidebarItems.length && (
              <Box px={2.5}>
                <Divider borderColor={"cyan.500"} />
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

export default Sidebar;

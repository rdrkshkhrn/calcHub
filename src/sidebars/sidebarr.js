import React from "react";
import {
  Box,
  Flex,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerContent,
  Heading,
  Tooltip,
  Button,
  Image,
  Text,
  Divider,
  CloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LuList } from "react-icons/lu";
import { FaCalculator } from "react-icons/fa";
import sidebarItems from "../SidebarItems.json";

function Sidebarr({
  selectedIndex, setSelectedIndex
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (index) =>{
    setSelectedIndex(index);
    onClose();
  }
  return (
    <Flex
      display={{ base: "block", md: "none" }}
      bg={"cyan.700"}
      h={"auto"}
      w={"full"}
      px={2}
      py={4}
    >
      <Box position="relative" bg="cyan.700" px={4}>
        <Tooltip label="Go to homepage" aria-label="Go to homepage">
          <Link
            as={Link}
            to="/"
            onClick={()=>setSelectedIndex(-1)}
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Flex alignItems="center" justifyContent="center">
              <FaCalculator color="white" size="28px" />
              <Heading
                ml={2}
                fontSize="2xl"
                color="white"
                fontFamily="'Poppins', sans-serif"
              >
                CalcHub
              </Heading>
            </Flex>
          </Link>
        </Tooltip>
        <Flex
          position="absolute"
          right="16px" // Adjust as needed to position it
          top="50%"
          alignItems="center"
          transform="translateY(-50%)"
        >
          <Button as={IconButton} onClick={onOpen} icon={<LuList />} />
          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            motionPreset="slideInTop"
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            h="auto"
          >
            <DrawerContent>
              <Box
                display={"flex"}
                flexDirection={"column"}
                pt={4}
                bgColor={"cyan.700"}
                pb={4}
                borderBottomRadius={4}
              >
                <Flex justifyContent={"space-between"}>
                  <Tooltip>
                    <Link as = {Link} to={"/"} onClick={()=>handleClick(-1)}>
                        <Flex
                        alignItems="center"
                        justifyContent="flex-start"
                        mb={"2rem"}
                        pl={4}
                        >
                        <FaCalculator color="white" size="28px" />
                        <Heading
                          ml={2}
                          fontSize="2xl"
                          color="white"
                          fontWeight={"semibold"}
                          _hover={{
                            textDecoration: "underline",
                            textDecorationColor: "white", // Set underline color to white
                          }}
                        >
                          CalcHub
                        </Heading>
                      </Flex>
                    </Link>
                  </Tooltip>
                  <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                    mr={2}
                    bgColor={"gray.500"}
                  />
                </Flex>
                {sidebarItems.map((item, index) => (
                  <Box key={index}>
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      as={Link}
                      onClick={()=>handleClick(index)}
                      to={item.link}
                      cursor={"pointer"}
                      //mx={2}
                      py={4}
                      bg={selectedIndex===index?'white':'transparent'}
                    >
                      <Flex
                        flexDirection={"row"}
                        gap={2}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        px={6}
                      >
                        <Image
                          src={item.image}
                          alt="icon"
                          rounded={"sm"}
                          boxSize={"20px"}
                        />
                        <Text
                          color={selectedIndex===index?'black':'white'}
                          fontWeight={"medium"}
                          fontFamily={"'Roboto', sans-serif"}
                        >
                          {item.name}
                        </Text>
                      </Flex>
                    </Box>
                    {index < sidebarItems.length - 1 && (
                      <Box px={2}>
                        <Divider borderColor={"teal.500"} />
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Sidebarr;

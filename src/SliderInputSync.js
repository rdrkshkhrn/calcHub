
import React, {useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Input,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

function SliderInputSync({ value, setValue, mn, mx }) {
  const [isBelowMin, setIsBelowMin] = useState(false);

  const handleSliderChange = (value) => {
    setValue(value);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "") {
      setValue("");
      setIsBelowMin(true); 
      return;
    }
    const parsedValue = Number(newValue);
  
    if (!isNaN(parsedValue)) {
      setValue(parsedValue);
      setIsBelowMin(parsedValue < mn);
    }
  };
  
  

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "column" }}
      gap="1rem"
      bg="gray.50"
      padding="1.5rem"
      borderRadius="md"
      boxShadow="md"
    >
      <Slider
        aria-label="slider-ex-1"
        min={mn}
        max={mx}
        value={value}
        onChange={handleSliderChange}
        focusThumbOnChange={false}
      >
        <SliderTrack h="8px" bg="gray.200">
          <SliderFilledTrack bg="teal.500" />
        </SliderTrack>
        <SliderThumb
          boxSize="20px"
          bg="teal.500"
          _focus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)" }}
        />
      </Slider>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-start"} alignItems={"center"}>
        
        <Input
          type="number"
          w={"8rem"}
          value={value}
          onChange={handleInputChange}
          padding="0.5rem"
          border="1.5px solid"
          borderColor={isBelowMin ? "red.500" : "gray.200"}
          focusBorderColor={isBelowMin ? "red.500" : "blue.500"}
          borderRadius="md"
          bg={isBelowMin ? "red.50" : "cyan.100"}
          color={isBelowMin ? "red.500" : "blue.600"}
        />
        <Tooltip label = {`min value is ${mn}`}>
        <Icon
          as={InfoIcon}
          color={"red.500"}
          display={isBelowMin ? "block" : "none"}
          marginLeft={"1rem"}
          cursor={"pointer"}
        />
        </Tooltip>
      </Box>
    </Box>
  );
}

export default SliderInputSync;

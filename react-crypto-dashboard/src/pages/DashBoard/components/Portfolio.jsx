import React from "react";
import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

function Portfolio() {
  return (
    <HStack
      justify="space-between"
      shadow="lg"
      borderRadius="xl"
      p="6"
      spacing="16"
    >
      <HStack spacing="8">
        <Stack>
          <HStack color="gray">
            <Text fontSize="14px">Total Portfolio Value</Text>
            <Icon as="IoIosInformationCircleOutline" />
          </HStack>
          <Text fontSize="24px">2,53,734.05</Text>
        </Stack>

        <Stack>
          <HStack color="gray">
            <Text fontSize="14px">Wallet Balance </Text>
          </HStack>
          <HStack spacing="8">
            <HStack>
              <Text fontSize="24px">1,23,639.50</Text> <Tag>BTC</Tag>
            </HStack>
            <HStack>
              <Text fontSize="24px">1,79,402.50</Text> <Tag>INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button
          bgColor="green"
          color="white"
          _hover={{
            backgroundColor: "white",
            color: "black",
            border: "2px solid green",
          }}
        >
          <HStack spacing={1}>
            <Icon as={FaArrowDown} />
            <Text>Deposit</Text>
          </HStack>
        </Button>
        <Button
          bgColor="red"
          color="white"
          _hover={{
            backgroundColor: "white",
            color: "black",
            border: "2px solid red",
          }}
        >
          <HStack spacing={1}>
            <Icon as={FaArrowUp} />
            <Text>Withdraw</Text>
          </HStack>
        </Button>
      </HStack>
    </HStack>
  );
}

export default Portfolio;

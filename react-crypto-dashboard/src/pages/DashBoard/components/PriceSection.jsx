import {
  Stack,
  HStack,
  Icon,
  Tag,
  Button,
  Text,
  Image,Tabs,Flex,Tab,TabPanels,TabPanel,TabList
} from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";

function PriceSection() {
  const timestamps = ["7:15 PM", "7:30 PM", "7:45 PM", "8:00 PM", "8:15 PM"];

  return (
    <Stack shadow="lg" borderRadius="xl" p="6">
      <HStack justify="space-between" spacing="16">
        <HStack spacing="8">
          <Stack>
            <HStack color="gray">
              <Text fontSize="14px">Current Price</Text>
              <Icon as={IoIosInformationCircleOutline} />
            </HStack>
            <HStack>
              <Text fontSize="24px">26,670.25</Text>
              <Tag color="green">
                <Icon as={GoArrowUpRight} />
                <Text>0.04%</Text>
              </Tag>
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
              <Icon as={FaPlus} />
              <Text>Buy</Text>
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
              <Icon as={FaMinus} />
              <Text>Sell</Text>
            </HStack>
          </Button>
        </HStack>
      </HStack>

      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="#E5E4E2" p="3px" borderRadius='10px'>
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
      </Tabs>

      <Image src="/graph.png" mt='3rem'/>

      <HStack justify="space-between">
        {timestamps.map((timestamp) => (
          <Text key={timestamp} fontSize="sm" color="black.80">
            {timestamp}
          </Text>
        ))}
      </HStack>

    </Stack>
  );
}

export default PriceSection;

import React from "react";
import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

function SideNav() {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashoard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transaction",
    },
  ];

  return (
    <Stack justify="space-between" boxShadow="lg" w="16rem" h="100vh">
      <Box>
        <Heading textAlign="center" fontSize="32px" as="h1" pt="3.5rem" color='purple'>
          @CryptoPulse
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                py="3"
                px="4"
                color="#797E82"
                borderRadius="10px"
                _hover={{ bg: "#F3F3F7", color: "#171717" }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="15px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to={"/support"}>
          <HStack
            py="3"
            px="4"
            color="#797E82"
            borderRadius="10px"
            _hover={{ bg: "#F3F3F7", color: "#171717" }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="15px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
}

export default SideNav;

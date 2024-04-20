import {
  Flex,
  Container,
  Heading,
  HStack,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaRegUser } from "react-icons/fa";

function TopNav({ title }) {
  return (
    <Box boxShadow='lg'>
      <HStack maxW="70rem" h={16} justify={"space-between"} mx="auto">
        <Heading fontWeight="medium" fontSize="25px" as="h2">
          {title}
        </Heading>

        <Menu>
          <MenuButton as={Button} borderRadius="50px">
            <Icon as={FaRegUser} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default TopNav;

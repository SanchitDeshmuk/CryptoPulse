import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

function DashboardLayout({title,children}) {
  return (
    <Flex>
      <SideNav />
      <Box flexGrow={1}>
        <TopNav title={title}/>
        <Container mt={6} maxW='70rem'>{children}</Container>
      </Box>
    </Flex>
  );
}

export default DashboardLayout;

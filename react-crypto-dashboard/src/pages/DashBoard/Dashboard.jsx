import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Portfolio from "./components/Portfolio";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import TransactionSection from './components/TransactionSection';

function Dashboard() {
  return (
    <DashboardLayout title="DashBoard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={2}>
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <TransactionSection/>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;

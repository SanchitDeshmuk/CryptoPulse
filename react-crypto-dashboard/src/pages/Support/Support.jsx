import React from "react";
import DashboardLayout from "./../../components/DashboardLayout";
import { IoMdMail } from "react-icons/io";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { Stack } from "@chakra-ui/react";

function Support() {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="5rem">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
      </Stack>
    </DashboardLayout>
  );
}

export default Support;

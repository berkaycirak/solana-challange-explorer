import React from "react";
import SignatureHistoryList from "../components/SignatureHistoryList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AddressTabs = () => {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList>
        <TabsTrigger value="account">Signature History</TabsTrigger>
        <TabsTrigger value="password">Tokens</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-6">
        <SignatureHistoryList />
      </TabsContent>
      <TabsContent value="password"></TabsContent>
    </Tabs>
  );
};

export default AddressTabs;

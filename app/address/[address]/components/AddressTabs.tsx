import React from "react";
import SignatureHistoryList from "../components/SignatureHistoryList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TokenSignatures from "./TokenSignatures";

const AddressTabs = () => {
  return (
    <Tabs defaultValue="history" className="mt-4">
      <TabsList>
        <TabsTrigger value="history">History</TabsTrigger>
        <TabsTrigger value="tokens">Token History</TabsTrigger>
      </TabsList>
      <TabsContent value="history" className="mt-6">
        <SignatureHistoryList />
      </TabsContent>
      <TabsContent value="tokens">
        <TokenSignatures />
      </TabsContent>
    </Tabs>
  );
};

export default AddressTabs;

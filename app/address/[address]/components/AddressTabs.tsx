import React from "react";
import SignatureHistoryList from "../components/SignatureHistoryList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TokenSignatures from "./TokenSignatures";

const AddressTabs = () => {
  return (
    <Tabs defaultValue="history" className="">
      <TabsList>
        <TabsTrigger value="history">History</TabsTrigger>
        <TabsTrigger value="tokens">Tokens</TabsTrigger>
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

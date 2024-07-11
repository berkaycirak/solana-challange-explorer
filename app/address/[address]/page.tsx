import React from "react";

import AccountInfo from "./components/AccountInfo";
import AddressTabs from "./components/AddressTabs";
import TokenHoldings from "./components/TokenHoldings";

const ProfilePage = () => {
  return (
    <div className="p-4 xl:p-12">
      <div className="flex flex-col gap-4 xl:flex-row">
        <AccountInfo />
        <TokenHoldings />
      </div>

      {/* Address Tabs */}
      <AddressTabs />
    </div>
  );
};

export default ProfilePage;

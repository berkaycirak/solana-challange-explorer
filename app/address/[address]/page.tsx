import React from "react";

import AccountInfo from "./components/AccountInfo";
import AddressTabs from "./components/AddressTabs";

const ProfilePage = () => {
  return (
    <div className="p-12">
      <AccountInfo />
      {/* Address Tabs */}
      <AddressTabs />
    </div>
  );
};

export default ProfilePage;

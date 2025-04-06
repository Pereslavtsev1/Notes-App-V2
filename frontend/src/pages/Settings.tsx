import AccountSettings from "@/components/settings/AccoutntSettings";
import { useState } from "react";
import { Button } from "../components/ui/button";
import AppearanceSettings from "@/components/settings/AppearanceSettings";

const Settings = () => {
  const [activePage, setActivePage] = useState("account");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="container mx-auto flex flex-col gap-y-10 py-10">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-foreground/40">
          Manage your account settings and set preferences.
        </p>
      </div>
      <nav className="flex items-center gap-x-10">
        <Button className="" onClick={() => handlePageChange("account")}>
          Account
        </Button>
        <Button className="" onClick={() => handlePageChange("appearance")}>
          Appearance
        </Button>
      </nav>

      {activePage === "account" && <AccountSettings />}
      {activePage === "appearance" && <AppearanceSettings />}
    </div>
  );
};

export default Settings;

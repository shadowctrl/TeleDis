"use client";
import dynamic from "next/dynamic";
import { Switch } from "@/components/ui/switch";

const handleSwitch = async (value: Boolean) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      value,
    }),
  };
  await fetch(`${process.env.NEXT_PUBLIC_Base_Url}/api/telegram`, options);
};
const ToggleSwitch = () => {
  return <Switch onCheckedChange={(e) => handleSwitch(e)} />;
};

export default ToggleSwitch;

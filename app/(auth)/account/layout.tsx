import AnimatedTabs from "@/app/components/ui/Tabs";
import Link from "next/link";
import React from "react";

const tabs = [
    { id: "register", label: "ثبت نام" },
    { id: "login", label: "ورود" },

  ];

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-hidden bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="mb-8">
          <AnimatedTabs tabs={tabs} />
        </div>
        <div className="w-full h-[700px] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;

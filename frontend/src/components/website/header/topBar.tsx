import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex items-center h-10 bg-slate-800">
      <div className="container md:justify-start justify-center items-center flex mx-auto px-2 md:px-1">
        <div className="flex items-center h-full gap-3 text-primary-foreground">
          <div className="flex items-center gap-2 ">
            <Phone size={16} />
            <p className="text-xs">+91 9876543210</p>
          </div>
          <div className="w-[1px] h-[16px] bg-white" />
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <p className="text-xs">info@smartshop.com</p>
          </div>
          <div className="w-[1px] h-[16px] bg-white" />
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <p className="text-xs">New Delhi, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

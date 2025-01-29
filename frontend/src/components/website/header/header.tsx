import Logo from "@/components/shared/logo";
import React from "react";
import Search from "./search";
import { Heart, Phone, ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TopBar from "./topBar";
import MenuButton from "../shared/menuButton";

const Header = () => {
  return (
    <header>
      <TopBar />
      <div className="container px-2 md:px-1 w-full mx-auto flex items-center justify-between space-x-4 h-20 ">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <div className="md:hidden">
            <MenuButton />
          </div>

          <div className="flex items-center gap-1">
            <Logo />
            <h1 className="text-xl font-bold">SmartShop</h1>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex grow items-center gap-2">
          <Search />
        </div>

        <div className="flex ml-auto md:ml-0 h-full items-center gap-4">
          {/* Call Now */}
          <div className="flex group items-center gap-2 cursor-pointer">
            <Phone
              className="group-hover:text-teal-600 transition-all duration-200"
              size={32}
              strokeWidth={1.5}
            />
            <div className="flex flex-col">
              <p className="text-xs font-medium text-muted-foreground">
                Call Us Now:
              </p>
              <p className="group-hover:text-teal-600 group-hover:underline group-hover:underline-offset-4 text-sm font-semibold transition-all duration-300">
                +91 9876543210
              </p>
            </div>
          </div>

          <Separator orientation="vertical" className="h-1/2" />

          {/* Favourites */}
          <div className="flex items-center gap-2">
            <Heart />
          </div>

          <Separator orientation="vertical" className="h-1/2" />

          {/* Cart */}
          <div className="flex items-center gap-2">
            <ShoppingCart />
          </div>
        </div>
      </div>

      <div className="container px-2 md:px-1 w-full mx-auto md:hidden grow items-center gap-2">
        <Search />
      </div>
    </header>
  );
};

export default Header;

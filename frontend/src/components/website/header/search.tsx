import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

import React from "react";

const Search = () => {
  return (
    <div className="grow space-y-2">
      <div className="w-full md:w-[75%] relative mx-auto">
        <Input className="pe-9 w-full " placeholder="Search" type="text" />
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Search"
        >
          <SearchIcon size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Search;

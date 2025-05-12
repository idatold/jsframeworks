"use client";

import { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search products…",
}: SearchBarProps) {
  return (
    <div>
      <label htmlFor="search-input" className="sr-only">
        Search products
      </label>
      <input
        id="search-input"
        type="search"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="
          w-full max-w-md
          px-3 py-2
          bg-[#FDFCED]
          border-2 border-[#696956]
          rounded
          focus:outline-none
          hover:cursor-text
        "
      />
    </div>
  );
}

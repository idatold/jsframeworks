"use client";

import { ChangeEvent } from "react";

export type SortOption =
  | { label: "Price: Low → High"; value: "price-asc" }
  | { label: "Price: High → Low"; value: "price-desc" }
  | { label: "Name: A → Z"; value: "name-asc" }
  | { label: "Name: Z → A"; value: "name-desc" };

interface SortDropdownProps {
  options: SortOption[];
  selected: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({
  options,
  selected,
  onChange,
}: SortDropdownProps) {
  return (
    <div>
      <label htmlFor="sort-select" className="sr-only">
        Sort by
      </label>

      <select
        id="sort-select"
        value={selected}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onChange(e.target.value)
        }
        className="
          ml-0 sm:ml-4
          mt-4 sm:mt-0
          px-3 py-2
          bg-[#FDFCED]
          border-2 border-[#696956]
          rounded
          focus:outline-none
          hover:cursor-pointer
        "
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

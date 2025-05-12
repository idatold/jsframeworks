// src/components/SortDropdown.tsx
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
  /** The visible label text (or use sr-only for hidden) */
  label?: string;
}

export default function SortDropdown({
  options,
  selected,
  onChange,
  label = "Sort by:",    // default label
}: SortDropdownProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center">
      {/* Use sr-only if you don’t want it visible */}
      <label
        htmlFor="sort-select"
        className="sr-only sm:mr-2 sm:sr-only-not sm:block"
      >
        {label}
      </label>

      <select
        id="sort-select"
        aria-label={label}  // extra ARIA support
        value={selected}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onChange(e.target.value)
        }
        className="
          ml-0 sm:ml-0
          mt-2 sm:mt-0
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

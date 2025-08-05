"use client";

import { usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortTypes } from "@/constants";

const Sort = () => {
  const router = useRouter();
  const path = usePathname();

  const handleSort = (value: string) => {
    router.push(`${path}?sort=${value}`);
  };

  return (
    <Select onValueChange={handleSort} defaultValue={sortTypes[0].value}>
      <SelectTrigger className="sort-select">
        <SelectValue placeholder={sortTypes[0].value} />
      </SelectTrigger>
      <SelectContent className="sort-select-content">
        {sortTypes.map((sortType) => (
          <SelectItem
            key={sortType.label}
            value={sortType.value}
            className="shad-select-item"
          >
            {sortType.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Sort;

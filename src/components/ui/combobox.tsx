"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import TruncatedText from "./truncated-text";

interface ComboboxProps {
  items: { value: string; label: string }[];
  placeholer: string;
  onChange: (value: string[]) => void;
  initialSelectedValues?: string[];
}

export function Combobox({ items, placeholer, onChange, initialSelectedValues }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>(initialSelectedValues ? initialSelectedValues : []);

  const handleSelect = (value: string) => {
    const isSelected = selectedValues.includes(value);
    let newSelectedValues: string[];

    if (isSelected) {
      newSelectedValues = selectedValues.filter((val) => val !== value);
    } else {
      newSelectedValues = [...selectedValues, value];
    }

    setSelectedValues(newSelectedValues);
  };

  React.useEffect(() => {
    onChange(selectedValues);
  }, [selectedValues]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {selectedValues.length > 0 ? (
            <TruncatedText message={selectedValues.map((val) => items.find((item) => item.value === val)?.label).join(", ")} />
          ) : (
            placeholer
          )}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholer} className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem key={item.value} value={item.value} onSelect={handleSelect}>
                  {item.label}
                  <CheckIcon className={cn("ml-auto h-4 w-4", selectedValues.includes(item.value) ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

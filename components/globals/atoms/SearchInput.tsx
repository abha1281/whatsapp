import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  paddingRight?: number;
};

const SearchInput = ({
  value,
  onChange,
  placeholder,
  paddingRight = 65,
}: Props) => {
  return (
    <input
      className="py-4 pl-6 bg-[#E1ECE1] w-full rounded-full focus:outline-none placeholder:text-[#424941]"
      style={{ paddingRight: paddingRight }}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;

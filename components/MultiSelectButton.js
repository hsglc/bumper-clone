/** @format */

import { PlusIcon, SuccessCheckIcon } from "../icons";

const MultiSelectButton = ({
  children,
  isSelected = false,
  onToggle = () => {},
}) => {
  return (
    <div
      onClick={onToggle}
      className={`bg-white  border cursor-pointer border-black rounded-[27px] transition-all duration-300 ${
        isSelected ? "bg-black" : "hover:bg-[#DCE6E6]"
      } px-4 py-3 text-black flex items-center gap-1`}>
      <span className={isSelected && "text-white"}>{children}</span>
      {isSelected ? <SuccessCheckIcon /> : <PlusIcon />}
    </div>
  );
};

export default MultiSelectButton;

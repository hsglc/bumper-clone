/** @format */

import TextWithIcon from "./Text";
import { QuotationMarkIcon, SuccessCheckIcon } from "../icons";

const Input = ({
  id,
  type = "text",
  labelText = "",
  value = "",
  onChange = () => {},
  placeholder = "",
  icon = null,
  isSuccessfullyValidated = null
}) => {
  const iconType =
    isSuccessfullyValidated === true ? (
      <SuccessCheckIcon />
    ) : isSuccessfullyValidated === false ? (
      <QuotationMarkIcon />
    ) : null;
  const borderStyle =
    isSuccessfullyValidated === true
      ? "border-green-500"
      : isSuccessfullyValidated === false
      ? "border-red-500"
      : "border-[#545454]/50";
  const classesOfInputTypes = {
    text: `h-12 rounded-[27px] border  ${borderStyle}`,
  };
  return (
    <label
      htmlFor={id}
      className="w-full relative flex flex-col gap-2 text-[#1B1B1B]">
      {<TextWithIcon text={labelText} icon={icon} />}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 outline-none text-[#1B1B1B] placeholder:font-medium placeholder:text-[#737373]/30 ${classesOfInputTypes[type]}`}
        id={id}
        type={type}
      />
      <div className="absolute top-[60px] right-6">{iconType}</div>
    </label>
  );
};

export default Input;

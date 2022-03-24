/** @format */

import { useRouter } from "next/router";

import { RightArrowIcon } from "../icons";

const Button = ({
  children,
  icon = <RightArrowIcon />,
  route = "",
  type = "",
  id = "",
}) => {
  const router = useRouter();

  return (
    <button
      data-testid={id}
      type={type}
      onClick={() => route && router.replace(route)}
      className="group w-full flex items-center justify-center gap-2.5 h-[45px] py-2.5 border border-[#1B1B1B] rounded-[27px] bg-[#32BE50] active:bg-[#1B1B1B]">
      <span className="text-black transition-all group-hover:text-white group-active:text-white">
        {children}
      </span>
      <i> {icon}</i>
    </button>
  );
};

export default Button;

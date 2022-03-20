/** @format */

const TextWithIcon = ({ text = "", icon = null, order = "fromLeft" }) => {
  return (
    <div className={`flex-center gap-1.5`}>
      {order === "fromLeft" && (
        <i className="w-5 flex justify-center">{icon}</i>
      )}
      <span className="font-black text-[#1B1B1B]">{text}</span>
      {order === "fromRight" && (
        <i className="w-5 flex justify-center">{icon}</i>
      )}
    </div>
  );
};

export default TextWithIcon;

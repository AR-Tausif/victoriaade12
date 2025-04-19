import { Check, Copy, Edit } from "lucide-react";
import  { useEffect, useState } from "react";

// react icons

export const OfferReviewDropdown = () => {
  const [actionButtonActive, setActionButtonActive] = useState(false);
  const [actionButtonText, setActionButtonText] = useState("Mark as read");

  const actionContents = [
    {
      label: "Mark as read",
      icon: <Check />,
    },
    {
      label: "Copy",
      icon: <Copy />,
    },
    {
      label: "Edit",
      icon: <Edit />,
    },
  ];

  const handleActionButtonClick = (item:any) => {
    setActionButtonText(item);
    setActionButtonActive(false);
  };

  useEffect(() => {
    const handleClick = (event:any) => {
      if (
        !event.target.closest(".publishButtonOptions") &&
        !event.target.closest(".publishButton")
      ) {
        setActionButtonActive(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <button
      className="flex items-center rounded bg-[#3B9DF8] border-none outline-none text-[#fff] justify-between relative"
      onClick={() => setActionButtonActive(!actionButtonActive)}
    >
      <button className=" text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
        {actionButtonText}
      </button>

      <ul
        className={`${
          actionButtonActive
            ? "opacity-100 z-20 translate-y-0"
            : " opacity-0 z-[-1] translate-y-[-5px]"
        } publishButtonOptions transition-all duration-500 flex flex-col bg-white py-1 w-full absolute top-[46px] rounded right-0 text-text text-[0.9rem]`}
      >
        {actionContents?.map((item, index) => (
          <li
            className="py-2 px-3 flex items-center gap-[5px] hover:bg-gray-50 rounded cursor-pointer"
            key={index}
            onClick={() => handleActionButtonClick(item.label)}
          >
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </button>
  );
};

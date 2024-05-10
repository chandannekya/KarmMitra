import { useState } from "react";

import { IoCallSharp } from "react-icons/io5";

const LabourCard = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="bg-white  p-3 flex flex-col gap-5  rounded-lg max-w-md shadow-lg">
      <div className="flex items-top gap-3">
        <div className=" ">
          <img
            className="rounded-full w-12 h-12 object-cover"
            src="https://rekhta.pc.cdn.bitgravity.com/Images/Shayar/shahryar.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            {" "}
            <h2 className=" text-xl font-bold">Labour Name</h2>
            <p className="text-sm italic ">Exp: 5 years</p>{" "}
          </div>
          <p className=" shadow-inner  border-violet-500 border-[2px] rounded-md text-sm font-bold text-violet-400 px-1 ">
            Labour Description
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm">Labour Address</p>
        <p className="text-sm">Labour Contact</p>
        <p className="text-sm">Labour Email</p>

        <p className="text-sm">Labour Rate</p>
      </div>
      <div className="flex gap-3 justify-between   text-xl">
        <div className=" bg-">
          <button>
            <IoCallSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabourCard;

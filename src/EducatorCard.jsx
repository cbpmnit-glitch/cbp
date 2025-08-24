import React from "react";

const EducatorCard = ({ image, name, role, bgColor }) => {
  return (
    <div id="Meet the Team" className="flex-col m-3 items-center text-center w-[150px] ">
      <div
        className="w-[130px] h-[130px] rounded-[20px] flex justify-center items-center mb-4"
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={image}
          alt={name}
          className="mb-3 rounded-2xl"
        />
      </div>
      <h3 className="font-semibold text-sm pr-4">{name}</h3>
    </div>
  );
};

export default EducatorCard;

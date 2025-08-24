import React from "react";

const WorkshopCard = ({
  image,
  title,
  description,
  date,
  duration,
  speaker,
  isSignature,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-md mb-6 transition duration-300 hover:shadow-xl">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-64 h-36 object-cover rounded-md border-2 border-blue-300"
        />
      </div>

      {/* Info Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-semibold  mb-1">{title}</h2>

        {isSignature && (
          <span className="inline-block bg-orange-100 text-yellow-900 px-2 py-1 text-xs rounded-full mb-2">
            🌟 Signature Workshop
          </span>
        )}

        <p className="text-gray-700 mb-4">{description}</p>

        <div className="text-sm flex flex-row sm:flex-row flex-wrap justify-center md:justify-start gap-2 md:gap-3 ">
          <span>
            👲{speaker}
          </span>
          <span>
            ⏳ {duration}
          </span>
          <span>📅- 
             {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;


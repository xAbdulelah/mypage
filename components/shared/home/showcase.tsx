'use client';
import { useState } from "react";
import Image, { StaticImageData } from "next/image";


const ShowCase = ({ img, title, description: description, label }: {
  img: StaticImageData;
  title: string;
 description: string;
  label: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const arrLabel = label.split(",");

  return (
    <>
      {/* Main Showcase Layout */}
      <div className="w-full  flex flex-col md:flex-row items-center justify-between gap-6 p-6  rounded-4xl dark:bg-slate-800 border border-slate-700 hover:dark:bg-cyan-800 ">
        
        {/* Clickable Image */}
        <div
          className="overflow-hidden rounded-lg border border-cyan-300 dark:border-slate-600 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={img}
            alt={title}
            className="w-48 h-auto"
            priority
          />
        </div>

        {/* Description */}
        <div className="text-center space-y-2 md:flex-1">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            {title}
          </h2>
          <p className="text-slate-700 dark:text-slate-300">
            <span className="font-semibold">Skills:</span> {description}
          </p>
        </div>

        {/* Course label */}
        
        <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300">

         {arrLabel.map((label) => (  <div key={label} className =  "bg-cyan-100 dark:bg-gray-900 hover:dark:bg-gray-300  hover:text-black px-4 py-2 rounded-lg font-medium shadow text-center">
            {label}
          </div>))}



          
       
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative p-4 bg-white dark:bg-slate-800 rounded-lg max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-800 px-2 py-1 rounded"
            >
              ✕
            </button>
            <Image
              src={img}
              alt={title}
              className="max-w-full h-auto rounded"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ShowCase;

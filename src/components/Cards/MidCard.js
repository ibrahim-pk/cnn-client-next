import React from "react";
import Link from 'next/link'
import FileDisplay from "@/Helpers/FileDisplay";
import Image from 'next/image'
import { extractFileId } from "../Utils/FileId";

function MidCard({ link, imageSrc, tag, text, horizontal, color, db }) {
  console.log(imageSrc);
  return (
    <Link href={link}>
      <div className={` ${horizontal ? "p-2" : ""} ${color ? "bg-black" : ""}`}>
        <div className="relative w-305 h-171 group">
          {db ? (
            <Image
            src={extractFileId(imageSrc)}
            alt=""
            className="w-full h-full object-cover transition-transform transform group-hover:scale-100"
            layout="responsive"
            height="500"
            width="500"
            />
          ) : (
            <Image
              src={extractFileId(imageSrc)}
              alt=""
              className="w-full h-full object-cover transition-transform transform group-hover:scale-100"
              layout="responsive"
            />
          )}

          {tag ? (
            <div className="absolute bottom-0 left-0 bg-white text-red-600 text-xs px-2 py-1 font-bold">
              {tag}
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <h4
            className={`text-xl font-bold mb-2 mt-2 ${
              color ? "text-white" : ""
            } hover:underline hover:text-gray-700`}>
            {text}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default MidCard;

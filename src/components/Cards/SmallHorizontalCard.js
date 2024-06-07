import React from "react";
import Link from "next/link";
import FileDisplay from "../../Helpers/FileDisplay";
import Image from "next/image";
import { extractFileId } from "../Utils/FileId";

function SmallHorizontalCard({ _id, file, title }) {
  return (
    <div className=" flex mt-2 border-t pt-4">
        <div className="relative  group w-1/4">
        <Image
            src={extractFileId(file)}
            alt=""
            className="w-full h-full object-cover transition-transform transform group-hover:scale-100"
            layout="responsive"
            height="500"
            width="500"
            />
        </div>

        <h4 className="text-base  self-start ml-2 hover:underline hover:text-gray-700 w-3/4">
          {title}
        </h4>
      </div>
  );
}

export default SmallHorizontalCard;

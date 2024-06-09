/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import FileDisplay from "../../Helpers/FileDisplay";
import Image from "next/image";
import { extractFileId } from "../Utils/FileId";

function SmallHorizontalCard({ _id, file, title }) {
  return (
    <div className=" flex mt-2 border-t pt-4">
        <div className="relative  group w-1/4">
        <img
            src={file}
            alt=""
            className="w-full h-full object-cover transition-transform transform group-hover:scale-100"

            />
        </div>

        <h4 className="text-base  self-start ml-2 hover:underline hover:text-gray-700 w-3/4">
          {title}
        </h4>
      </div>
  );
}

export default SmallHorizontalCard;

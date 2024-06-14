import React from "react";

import Link from 'next/link'
import ColumnHead from "@/Commmon/ColumnHead/ColumnHead";
import MidCard from "@/components/Cards/MidCard";
import TextOnly from "@/components/Cards/TextOnly";
import UseNewsFetch from "@/Commmon/FetchNews/UseNewsFetch";
function FifthSection() {


  const {
    data: allCards2,
  } = UseNewsFetch("World", null, null, null, 6, "desc");

  const {
    data: allCards3,
  } = UseNewsFetch("National", null, null, null, 6, "desc");

  let allCards=allCards2.filter(res=>res.pb===true)
  let allCards1=allCards3.filter(res=>res.pb===true)
  console.log(allCards);
  return (
    <div>
      <h2 className="pl-3.5 pt-6 pb-2 text-4xl font-bold">আপনার জন্য</h2>
      <div className="flex flex-wrap">
        {/* First Column (2 parts) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="আন্তর্জাতিক" />
          <MidCard    
            link={`/news/${allCards[0]?._id}`}
            imageSrc={allCards[0]?.file}
            text={allCards[0]?.title}
            tag={allCards[0]?.tag}
            db={true}
            />
          {allCards&&allCards.map((card, index) =>card?.pb&&(
            <TextOnly key={index}
            //  link={card._id}
            link={`/news/${card?._id}`}
             text={card.title}
            />
          ))}
        </div>

        {/* Second Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="বাংলাদেশ" />
          <MidCard 
            
            link={`/news/${allCards1[0]?._id}`}
            imageSrc={allCards1[0]?.file}
            text={allCards1[0]?.title}
            tag={allCards1[0]?.tag}
            db={true}
            />
          {allCards1&&allCards1.map((card, index) =>card?.pb&&(
            <TextOnly key={index}
            //  link={card?._id}
            link={`/news/${card?._id}`}
             text={card?.title}
             
            />
          ))}
        </div>

        {/* Third Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          {/* Content for the third column */}
          <Link href="/your-link-url">
            {/* Replace 'videos/sample.mp4' with the path to your video file */}
            <div className="relative w-full h-full group">
              {/* Image */}
              <img
                src="images/FifthSection/fifthadv.jpg"
                alt="analysis"
                className="w-full h-full object-cover transition-transform transform group-hover:scale-100"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gray-400 opacity-0">
                {/* Additional content can be added here, if needed */}
              </div>
              <div className="text-xs">Advertisement</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FifthSection;

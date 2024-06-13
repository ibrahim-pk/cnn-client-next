import React from "react";

import ColumnHead from "../Commmon/ColumnHead/ColumnHead";
import MidCard from "../components/Cards/MidCard";
import TextOnly from "../components/Cards/TextOnly";
import UseNewsFetch from "../Commmon/FetchNews/UseNewsFetch";
function SeventhSection() {

 


  const {
    data: allCardsPoli,
  } = UseNewsFetch("Politics", null, null, null, 6, "desc");

  const {
    data: allCards1Cri,
  } = UseNewsFetch("Crime", null, null, null, 6, "desc");

  const {
    data: allCards2Heal,
  } = UseNewsFetch("Health", null, null, null, 6, "desc");

  let allCards=allCardsPoli.filter(res=>res.pb===true)
  let allCards1=allCards1Cri.filter(res=>res.pb===true)
  let allCards2=allCards2Heal.filter(res=>res.pb===true)

  return (
    <div>
      <div className="flex flex-wrap">
        {/* First Column (2 parts) */}
        {/* First Column (2 parts) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="রাজনীতি" />
          <MidCard 
            
            link={`/news/${allCards[0]?._id}`}
            imageSrc={allCards[0]?.file}
            text={allCards[0]?.title}
            tag={allCards[0]?.tag}
            db={true}
            />
          {allCards&&allCards.map((card, index) => (
            <TextOnly key={index}
            link={`/news/${card._id}`}
             text={card.title}
            />
          ))}
        </div>

        {/* Second Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="অপরাধ" />
          <MidCard 
            
            link={`/news/${allCards1[0]?._id}`}
            imageSrc={allCards1[0]?.file}
            text={allCards1[0]?.title}
            tag={allCards1[0]?.tag}
            db={true}
            />
          {allCards1&&allCards1.map((card, index) => (
            <TextOnly key={index}
            link={`/news/${card._id}`}
             text={card.title}
            />
          ))}
        </div>

        {/* Third Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="স্বাস্থ্য" />
          <MidCard 
            
            link={`/news/${allCards2[0]?._id}`}
            imageSrc={allCards2[0]?.file}
            text={allCards2[0]?.title}
            tag={allCards2[0]?.tag}
            db={true}
            />
          {allCards2&&allCards2.map((card, index) => (
            <TextOnly key={index}
            link={`/news/${card._id}`}
             text={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeventhSection;

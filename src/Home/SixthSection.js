import React from "react";

import ColumnHead from "../Commmon/ColumnHead/ColumnHead";
import MidCard from "../components/Cards/MidCard";
import TextOnly from "../components/Cards/TextOnly";
import UseNewsFetch from "../Commmon/FetchNews/UseNewsFetch";
function SixthSection() {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/SixthSection/11.jpg",
      text: "He consumed more than 40,000 calories running four and half days while barely sleeping",
      tag: "",
    },

    // Add more cards as needed
  ];
  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "images/SixthSection/21.jpg",
      text: "Painting valued at $15K turns out to be by Rembrandt. Now it has sold for almost $14M",
      tag: "",
    },

    // Add more cards as needed
  ];
  const midCards3 = [
    {
      link: "/your-link-url",
      imageSrc: "images/SixthSection/31.jpg",
      text: "How a Biden move to drop terrorist designation on Iran-backed militia backfired",
      tag: "",
    },

    // Add more cards as needed
  ];

  const textOnly = [
    {
      link: "/your-link-url",
      text: "UK government signs Hillsborough Charter, acknowledges ‘multiple injustices’ suffered by soccer stadium disaster victims",
    },
    {
      link: "/your-link-url",
      text: "The Hughes brothers had a historic night on the ice, playing in the same game for the first time as New Jersey Devils win",
    },
    {
      link: "/your-link-url",
      text: "Messi effect? US to host 2024 Copa América across 14 cities",
    },
    {
      link: "/your-link-url",
      text: "Aaron Rodgers criticizes ‘character assassination’ of Jets teammate Zach Wilson",
    },
  ];
  const textOnly2 = [
    {
      link: "/your-link-url",
      text: "Meet the South Korean artist using her own body as a canvas",
    },
    {
      link: "/your-link-url",
      text: "The photographer capturing unexpected moments of peace in busy cities",
    },
    {
      link: "/your-link-url",
      text: "‘Final’ photos of nursing pioneer Florence Nightingale up for auction",
    },
    {
      link: "/your-link-url",
      text: "How ‘The Crown’ recreated Kate Middleton’s 2000s style",
    },
    {
      link: "/your-link-url",
      text: "British poet and author Benjamin Zephaniah dies aged 65",
    },
  ];
  const textOnly3 = [
    {
      link: "/your-link-url",
      text: "Why COP28 is so infuriating",
    },
    {
      link: "/your-link-url",
      text: "Celebrities speaking out on the war in Gaza should consider this",
    },
    {
      link: "/your-link-url",
      text: "Beneath the rubble, the unreachable bodies of my Palestinian family",
    },
    {
      link: "/your-link-url",
      text: "No one does capitalism like Taylor Swift",
    },
  ];

  const {
    data: allCardsSports,
  } = UseNewsFetch("Sports", null, null, null, 6, "desc");

  const {
    data: allCards1Edu,
  } = UseNewsFetch("Education", null, null, null, 6, "desc");

  const {
    data: allCardsSci,
  } = UseNewsFetch("Science", null, null, null, 6, "desc");

  let allCards=allCardsSports.filter(res=>res.pb===true)
  let allCards1=allCards1Edu.filter(res=>res.pb===true)
  let allCards2=allCardsSci.filter(res=>res.pb===true)

  return (
    <div>
      <div className="flex flex-wrap">
        {/* First Column (2 parts) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="খেলাধুলা" />
          <MidCard 
            
            link={`/${allCards[0]?._id}`}
            imageSrc={allCards[0]?.file}
            text={allCards[0]?.title}
            tag={allCards[0]?.tag}
            db={true}
            />
          {allCards&&allCards.map((card, index) =>card?.pb &&(
            <TextOnly key={index}
             link={card._id}
             text={card.title}
            />
          ))}
        </div>

        {/* Second Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="শিক্ষাঙ্গন" />
          <MidCard 
            
            link={`/${allCards1[0]?._id}`}
            imageSrc={allCards1[0]?.file}
            text={allCards1[0]?.title}
            tag={allCards1[0]?.tag}
            db={true}
            />
          {allCards1&&allCards1.map((card, index) => card?.pb &&(
            <TextOnly key={index}
             link={card._id}
             text={card.title}
            />
          ))}
        </div>

        {/* Third Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="বিজ্ঞান" />
          <MidCard 
            
            link={`/${allCards2[0]?._id}`}
            imageSrc={allCards2[0]?.file}
            text={allCards2[0]?.title}
            tag={allCards2[0]?.tag}
            db={true}
            />
          {allCards2&&allCards2.map((card, index) =>card?.pb && (
            <TextOnly key={index}
             link={card._id}
             text={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SixthSection;

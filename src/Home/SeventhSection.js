import React from "react";

import ColumnHead from "../Commmon/ColumnHead/ColumnHead";
import MidCard from "../components/Cards/MidCard";
import TextOnly from "../components/Cards/TextOnly";
import UseNewsFetch from "../Commmon/FetchNews/UseNewsFetch";
function SeventhSection() {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/SeventhSection/11.jpg",
      text: "Christie ramps up Haley criticism as he rejects calls to exit GOP primary",
      tag: "",
    },

    // Add more cards as needed
  ];
  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "images/SeventhSection/21.jpg",
      text: "Are you making one of these common exercising errors? Experts weigh in",
      tag: "",
    },

    // Add more cards as needed
  ];
  const midCards3 = [
    {
      link: "/your-link-url",
      imageSrc: "images/SeventhSection/31.jpg",
      text: "OpenAI had a confusing week. Who came out on top? And who lost out?",
      tag: "",
    },

    // Add more cards as needed
  ];

  const textOnly = [
    {
      link: "/your-link-url",
      text: "Biden administration announces new financial strike force to curb deadly fentanyl trade",
    },
    {
      link: "/your-link-url",
      text: "Sen. Murphy open to placing conditions on aid to Israel, calls civilian death toll in Gaza ‘unacceptable’",
    },
    {
      link: "/your-link-url",
      text: "Defying DeSantis: Florida GOP chair says he won't step down as new details emerge from sexual assault investigation",
    },
    {
      link: "/your-link-url",
      text: "GOP Sen. Lindsey Graham says he’s ‘lost all confidence’ in Defense Secretary Lloyd Austin",
    },
  ];
  const textOnly2 = [
    {
      link: "/your-link-url",
      text: "Could the most magical time of year be so full of loneliness, anger and stress?",
    },
    {
      link: "/your-link-url",
      text: "Meet ‘Turtwig,’ an ancient turtle species once thought to be a plant",
    },
    {
      link: "/your-link-url",
      text: "The dirty truth about taking your shoes off at the door",
    },
    {
      link: "/your-link-url",
      text: "No antibiotics worked, so this woman turned to a natural enemy of bacteria to save her husband’s life",
    },
  ];
  const textOnly3 = [
    {
      link: "/your-link-url",
      text: "Dems accuse X of profiting from Hamas propaganda",
    },
    {
      link: "/your-link-url",
      text: "Spotify to slash royalties for non-music tracks",
    },
    {
      link: "/your-link-url",
      text: "Jack Ma backs off on plans to sell Alibaba shares",
    },
    {
      link: "/your-link-url",
      text: "Solid state batteries promise to radically change EVs. But they may not be the only answer",
    },
    {
      link: "/your-link-url",
      text: "Here are the dozen brands that have paused ads on X amid ongoing crisis for Elon Musk’s platform",
    },
  ];


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
            
            link={`/${allCards[0]?._id}`}
            imageSrc={allCards[0]?.file}
            text={allCards[0]?.title}
            tag={allCards[0]?.tag}
            db={true}
            />
          {allCards&&allCards.map((card, index) => (
            <TextOnly key={index}
             link={card._id}
             text={card.title}
            />
          ))}
        </div>

        {/* Second Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="অপরাধ" />
          <MidCard 
            
            link={`/${allCards1[0]?._id}`}
            imageSrc={allCards1[0]?.file}
            text={allCards1[0]?.title}
            tag={allCards1[0]?.tag}
            db={true}
            />
          {allCards1&&allCards1.map((card, index) => (
            <TextOnly key={index}
             link={card._id}
             text={card.title}
            />
          ))}
        </div>

        {/* Third Column (1 part) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <ColumnHead columnHeadTag="স্বাস্থ্য" />
          <MidCard 
            
            link={`/${allCards2[0]?._id}`}
            imageSrc={allCards2[0]?.file}
            text={allCards2[0]?.title}
            tag={allCards2[0]?.tag}
            db={true}
            />
          {allCards2&&allCards2.map((card, index) => (
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

export default SeventhSection;

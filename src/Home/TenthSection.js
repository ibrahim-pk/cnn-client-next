import React from "react";

import MidCard from "../components/Cards/MidCard";
import UseNewsFetch from "../Commmon/FetchNews/UseNewsFetch";
function TenthSection() {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "http://localhost:3000/images/TenthSection/11.webp",
      text: "Windows Users Didn't Know This Simple Trick To Block All Ads (Do It Now)",
      horizontal: true,
    },
    {
      link: "/your-link-url",
      imageSrc: "http://localhost:3000/images/TenthSection/21.webp",
      text: "Castle-Sized Cabin on Lake Tahoe Asks Nearly $50 Million—Glass Funiculars Included",
      tag: "",
      horizontal: true,
    },
    {
      link: "/your-link-url",
      imageSrc: "http://localhost:3000/images/TenthSection/31.webp",
      text: "What Happens When Kamala Harris Lives in Your Condo Complex",
      tag: "",
      horizontal: true,
    },
    {
      link: "/your-link-url",
      imageSrc: "http://localhost:3000/images/TenthSection/41.webp",
      text: "Incredible News: The Pain-Relieving Product that Changes Lives!",
      tag: "",
      horizontal: true,
    },
  ];

  const {
    data: allCards,
    loading: loading1,
    error: error1,
  } = UseNewsFetch("Entertainment", null, null, null, 6, "desc");
 
  return (
    <div>
      <h2 className="pl-3.5 pt-6 pb-2 text-4xl font-bold">আরো বিষয় নিয়ে পড়ুন</h2>
      <div className="flex flex-wrap">
        {/* First Column (2 parts) */}
        <div className="w-full md:w-3/3 p-4">
          <div className="flex flex-wrap">
            {allCards&&allCards.map((card, index) => (
              <div key={index} className="w-full md:w-1/2 p-2">
                <MidCard 
                  key={`cat1-${index}`}
                  link={`/news/${card?._id}`}
                  imageSrc={card?.file}
                  text={card?.title}
                  tag={card?.tag}
                  db={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Column (1 part) */}
      </div>
    </div>
  );
}

export default TenthSection;

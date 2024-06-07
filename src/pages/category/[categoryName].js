import React, { useState } from "react";

import {useRouter} from 'next/router'
import UseNewsFetch from "@/Commmon/FetchNews/UseNewsFetch";
import Header from "@/Commmon/Header/Header";
import MidCard from "@/components/Cards/MidCard";
import TextOnly from "@/components/Cards/TextOnly";
import Footer from "@/Commmon/Footer/Footer";
function Category() {
  const router=useRouter()
  const {
    data: allCards,
    loading: loading1,
    error: error1,
  } = UseNewsFetch(router.query.categoryName, null, null, null, 6, "desc");
 //console.log(allCards);
  const midCards = allCards.slice(0, 3);
  const midCards2 = allCards.slice(3);

  const {
    data: textOnly,
    loading: loading3,
    error: error3,
  } = UseNewsFetch(router.query.categoryName, null, null, null, 6, "desc");

  const [showFooterSearch, setShowFooterSearch] = useState(false);
  const onSearchButtonClick = () => {
    setShowFooterSearch(!showFooterSearch);
  };

  return (
    <>
      <Header onSearchButtonClick={onSearchButtonClick} />
      {!showFooterSearch && (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-4 ">
            {midCards.map((card, index) =>card?.pb&& (
              <MidCard
                key={`cat1-${index}`}
                link={`/news/${card?._id}`}
                imageSrc={card?.file}
                text={card?.title}
                tag={card?.tag}
                db={true}
              />
            ))}
          </div>
          <div className="w-full md:w-1/3 p-4 ">
            {midCards2.map((card, index) =>card?.pb&&(
              <MidCard
                key={`cat1-${index}`}
                link={`/news/${card?._id}`}
                imageSrc={card?.file}
                text={card?.title}
                tag={card?.tag}
                db={true}
              />
            ))}
          </div>
          <div className="w-full md:w-1/3 p-4 ">
            {/* <Link href="/news-link" className="relative w-305 h-171 group mb-4">
              <video
                autoPlay={true}
                muted
                playsinline
                loop
                controls
                className="w-full  rounded-sm">
                <source src="/videos/FirstSection/video.mp4" />
              </video>
            </Link> */}
            <div>
              <div className="mb-2 mt-4 font-bold text-xl hover:underline">
                আরো পড়ুন
              </div>
              <div>
                {textOnly.map((card, index) => card?.pb&&(
                  <TextOnly
                    key={`cat2-${index}`}
                    link={`/news/${card?._id}`}
                    text={card?.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Category;

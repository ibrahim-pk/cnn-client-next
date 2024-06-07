import React, { useState } from "react";
import Header from "../Commmon/Header/Header";
import Firstsection from "./Firstsection";

import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";

import Footer from "../Commmon/Footer/Footer";

function Home() {
  const [showFooterSearch, setShowFooterSearch] = useState(false);
  const onSearchButtonClick = () => {
    setShowFooterSearch(!showFooterSearch);
  };

  return (
    <>
      <Header onSearchButtonClick={onSearchButtonClick} />
      {!showFooterSearch && (
        <>
          <Firstsection />


          {/* <SecondSection />
          <ThirdAdv />
          <FourthSection /> */}


          <FifthSection />
          <SixthSection />
          <SeventhSection />




          {/* <EighthSection />
          <NinthSection /> */}
          {/* <TenthSection />
          <EleventhSection /> */}
        </>
      )}
      <Footer />
    </>
  );
}

export default Home;

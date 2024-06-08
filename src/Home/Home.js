import React, { useState } from "react";
import Header from "../Commmon/Header/Header";
import Firstsection from "./Firstsection";

import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";

import Footer from "../Commmon/Footer/Footer";
import MetaDecorator from "@/components/Utils/MetaDecorator";

function Home() {
  const [showFooterSearch, setShowFooterSearch] = useState(false);
  const onSearchButtonClick = () => {
    setShowFooterSearch(!showFooterSearch);
  };

  return (
    <>
      <MetaDecorator title="হোম-বার্তালয়২৪" description="অনলাইন ভিত্তিক নিউজ পোর্টাল" baseUrl="https://www.bartaloy24.com/"  imageUrl="https://drive.google.com/file/d/1GAtbDS7Yab4cPibyWLuGYDFXHiFvPiD8/view?usp=drive_link" />
      <Header onSearchButtonClick={onSearchButtonClick} />
      {!showFooterSearch && (
        <>
          <Firstsection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
        </>
      )}
      <Footer />
    </>
  );
}

export default Home;

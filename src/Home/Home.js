import React, { useState } from "react";
import Header from "../Commmon/Header/Header";
import Firstsection from "./Firstsection";

import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";

import Footer from "../Commmon/Footer/Footer";
import MetaDecorator from "@/components/Utils/MetaDecorator";
import { extractFileId } from "@/components/Utils/FileId";

function Home() {
  const [showFooterSearch, setShowFooterSearch] = useState(false);
  const onSearchButtonClick = () => {
    setShowFooterSearch(!showFooterSearch);
  };

  let url="https://drive.google.com/file/d/1GAtbDS7Yab4cPibyWLuGYDFXHiFvPiD8/view?usp=drive_link"

  return (
    <>
      <MetaDecorator title="হোম-বার্তালয়২৪" description="অনলাইন ভিত্তিক নিউজ পোর্টাল" baseUrl="https://www.bartaloy24.com/"  imageUrl={extractFileId(url)} />
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

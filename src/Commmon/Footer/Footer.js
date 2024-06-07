import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";
function Footer({ SearchText }) {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (e) => {
    //console.log(e);
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/search/${searchText}`);
  };

  const categoriesRow1 = [
    {
      title: "World",
      items: [
        "Africa",
        "Americas",
        "Asia",
        "Australia",
        "China",
        "Europe",
        "India",
        "Middle East",
        "United Kingdom",
      ],
    },
    {
      title: "US Politics",
      items: ["The Biden Presidency", "Facts First", "2024 Elections"],
    },
    {
      title: "Business",
      items: ["Markets", "Tech", "Media", "Calculators", "Videos"],
    },
    {
      title: "Health",
      items: [
        "Life, But Better",
        "Fitness",
        "Food",
        "Sleep",
        "Mindfulness",
        "Relationships",
      ],
    },
    {
      title: "Entertainment",
      items: ["Movies", "Television", "Celebrity"],
    },
    {
      title: "Tech",
      items: [
        "Innovate",
        "Gadget",
        "Foreseeable Future",
        "Mission: Ahead",
        "Upstarts",
        "Work Transformed",
        "Innovative Cities",
      ],
    },
    {
      title: "Style",
      items: [
        "Arts",
        "Design",
        "Fashion",
        "Architecture",
        "Luxury",
        "Beauty",
        "Video",
      ],
    },

    // Add other categories similarly
  ];
  const categoriesRow2 = [
    {
      title: "Travel",
      items: ["Destinations", "Food & Drink", "Stay", "News", "Videos"],
    },
    {
      title: "Sports",
      items: [
        "Football",
        "Tennis",
        "Golf",
        "Motorsport",
        "US Sports",
        "Olympics",
        "Climbing",
        "Esports",
        "Hockey",
      ],
    },
    {
      title: "Watch",
      items: [
        "Live TV",
        "Digital Studios",
        "CNN Films",
        "HLN",
        "TV Schedule",
        "TV Shows A-Z",
        "CNNVR",
      ],
    },
    {
      title: "Features",
      items: [
        "As Equals",
        "Call to Earth",
        "Freedom Project",
        "Impact Your World",
        "Inside Africa",
        "2 Degrees",
        "CNN Heroes",
        "All Features",
      ],
    },
    {
      title: "Weather",
      items: ["Climate", "Wildfire Tracker", "Video"],
    },
    {
      title: "More",
      items: [
        "Photos",
        "Longform",
        "Investigations",
        "CNN Profiles",
        "CNN Leadership",
        "CNN Newsletters",
        "Work for CNN",
      ],
    },
    // Add other categories similarly
  ];
  return (
    <>
      <div className="bg-black p-4 md:hidden">
        <hr className="pb-5" />
        <div className="flex items-center p-2 mt-4 flex-col md:flex-row">
          <input
            type="text"
            value={SearchText}
            className="h-8 px-2 w-full bg-white border-none rounded-1 outline-none mb-2 md:mb-0 md:mr-2"
            onChange={handleInputChange}
          />
          <button
            onClick={handleSearch}
            className="h-8 bg-white text-black px-2 rounded-r flex items-center font-bold">
            Search <span className="ml-1 font-bold text-2xl pb-1">&#8594;</span>
          </button>
        </div>
        {/* <div className="bg-black w-full flex items-center justify-between text-white p-4">
          <div className="grid grid-cols-1 md:grid-cols-7 pb-4">
            {categoriesRow1.map((category, index) => (
              <div key={index} className="border-b-3 border-white">
                <span className="font-bold text-lg">{category?.title}</span>
                <div className="flex flex-col flex-wrap mt-2">
                  {category.items.map((item, i) => (
                    <NavLink
                      key={i}
                      to={`/${category?.title.toLowerCase()}/${item.toLowerCase()}`}
                      className="py-1 text-sm leading-none hover:underline"
                      exact>
                      {item}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 pb-4">
            {categoriesRow2.map((category, index) => (
              <div key={index} className="border-b-3 border-white">
                <span className="font-bold text-lg">{category?.title}</span>
                <div className="flex flex-col flex-wrap mt-2">
                  {category.items.map((item, i) => (
                    <NavLink
                      key={i}
                      to={`/${category?.title.toLowerCase()}/${item.toLowerCase()}`}
                      className="py-1 text-sm leading-none hover:underline"
                      exact>
                      {item}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="bg-black w-full pt-8 pb-8 px-5 flex flex-col items-center md:items-start text white border-t border-b border-gray-700">
          <div className=" w-full flex items-center justify-between flex-col md:flex-row">
            <div className="flex items-center">
              <Image
                src="/images/Header/bartaloy24.png"
                alt=""
                className="w-auto h-24 mr-4"
                height="24"
                width="100"
              />
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Link
                href="/"
                className="text-white text-[0.937rem] font-bold ml-0 md:ml-7">
                হোম
              </Link>
              <button className="border border-white rounded-xl px-4 py-2 ml-5 text-white hover:bg-gray-800">
               লগ ইন
              </button>
            </div>
          </div>
        </div>
         <div>
         <div className="text-white text-[0.937rem] text-center font-bold ">
                জয়েন হোন 
              </div>
            <div className="flex justify-center my-3">
            <a
                href="https://www.facebook.com/bartaloy24"
                className="text-white text-[0.937rem] font-bold mx-4">
                <Image
                  src="/images/Footer/Facebook.png"
                  className="h-8 w-8"
                  alt=""
                  height="8"
                  width="8"
                />
              </a>
              <a
                href="https://www.youtube.com/@bartaloy24"
                className="text-white text-[0.937rem] font-bold mx-4">
                <Image
                  src="/images/Footer/youtube.png"
                  className="h-8 w-8"
                  alt=""
                  height="8"
                  width="8"
                />
              </a>
            </div>
         </div>
        <div className="text-white text-sm flex flex-wrap items-center justify-center w-full mt-4 md:justify-start ">
          <Link href="/">Terms of Use</Link>
        </div>
        <div className="text-white text-sm mt-4 text-center">
          কপিরাইট ©2024 বার্তালয়। সর্বস্বত্ব সংরক্ষিত।
        </div>
        
      </div>

      <div className="bg-black p-4 hidden md:block ">
        <hr className="pb-5" />
        <div className="flex items-center p-2 mt-4">
          <input
            type="text"
            value={SearchText}
            className="h-8 px-2 w-full bg-white border-none rounded-1 outline-none"
            onChange={handleInputChange}
          />
          <button
            onClick={handleSearch}
            className="h-8 bg-white text-black px-2 rounded-r flex items-center font-bold">
            Search <span className="ml-1 font-bold text-2xl pb-1">&#8594;</span>
          </button>
        </div>
        {/* <div className="bg-black text-white p-4">
          <div className="grid grid-cols-7 pb-4">
            {categoriesRow1.map((category, index) => (
              <div key={index} className="border-b-3 border-white">
                <span className="font-bold text-lg">{category?.title}</span>
                <div className="flex flex-col flex-wrap mt-2">
                  {category.items.map((item, i) => (
                    <NavLink
                      key={i}
                      to={`/${category?.title.toLowerCase()}/${item.toLowerCase()}`}
                      className="py-1 text-sm leading-none hover:underline"
                      exact>
                      {item}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 pb-4">
            {categoriesRow2.map((category, index) => (
              <div key={index} className="border-b-3 border-white">
                <span className="font-bold text-lg">{category?.title}</span>
                <div className="flex flex-col flex-wrap mt-2">
                  {category.items.map((item, i) => (
                    <NavLink
                      key={i}
                      to={`/${category?.title.toLowerCase()}/${item.toLowerCase()}`}
                      className="py-1 text-sm leading-none hover:underline"
                      exact>
                      {item}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="bg-black w-full pt-8 pb-8 px-5 flex flex-col items-start text white border-t border-b border-gray-700">
          <div className=" w-full flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/Header/bartaloy24.png"
                alt=""
                className="w-auto h-24 mr-4"
                height="100"
                width="150"
              />
             
            </div>
            <div className="flex items-center">
              <Link
                href="/"
                className="text-white text-[0.937rem] font-bold ml-7">
                হোম
              </Link>
              <Link
                href="/Sport"
                className="text-white text-[0.937rem] font-bold ml-7">
                খেলা
              </Link>
              <Link
                href="/Latest"
                className="text-white text-[0.937rem] font-bold ml-7">
                সর্বশেষ
              </Link>
              <div className="border-r border-gray-500 w-1 h-6 mx-4"></div>
              <div className="text-white text-[0.937rem] font-bold ">
                জয়েন হোন 
              </div>
              <a
                href="https://www.facebook.com/bartaloy24"
                className="text-white text-[0.937rem] font-bold mx-4">
                <Image
                  src="/images/Footer/Facebook.png"
                  className="h-full w-full"
                  alt=""
                  height="100"
                  width="100"
                />
              </a>
              <a
                href="https://www.youtube.com/@bartaloy24"
                className="text-white text-[0.937rem] font-bold mx-4">
                <Image
                  src="/images/Footer/youtube.png"
                  className="h-8 w-8"
                  alt=""
                  height="8"
                  width="8"
                />
              </a>
              {/* <NavLink
                to="/Instagram"
                className="text-white text-[0.937rem] font-bold mx-4">
                <img
                  src="images/Footer/Instagram.png"
                  className="h-full w-full"
                  alt=""
                />
              </NavLink> */}
              {/* <NavLink
                to="/Tiktok"
                className="text-white text-[0.937rem] font-bold mx-4">
                <img
                  src="images/Footer/Tiktok.png"
                  className="h-full w-full"
                  alt=""
                />
              </NavLink>
              <NavLink
                to="/LinkedIn"
                className="text-white text-[0.937rem] font-bold mx-4">
                <img
                  src="images/Footer/LinkedIn.png"
                  className="h-full w-full"
                  alt=""
                />
              </NavLink> */}
              <button className="border border-white rounded-xl px-4 py-2 ml-5 text-white hover:bg-gray-800">
                <Link href="/login">
                লগ ইন
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="text-white text-sm flex flex-wrap items-center justify-start w-full mt-4 ">
          <Link href="/">Terms of Use</Link>
          <Link href="/" className="ml-4">
            Privacy Policy
          </Link>
          <Link href="/" className="ml-4">
            Cookie Settings
          </Link>
          <Link href="/" className="ml-4">
            Ad Choices
          </Link>
          <Link href="/" className="ml-4">
            Accessibility & CC
          </Link>
          <Link href="/" className="ml-4">
            About
          </Link>
          <Link href="/" className="ml-4">
            Newsletters
          </Link>
          <Link href="/" className="ml-4">
            Transcripts
          </Link>
        </div>
        <div className="text-white text-sm mt-4">
          কপিরাইট ©2024 বার্তালয়। সর্বস্বত্ব সংরক্ষিত।
        </div>
        
      </div>
    </>
  );
}

export default Footer;

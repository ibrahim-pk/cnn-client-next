import axios from "axios";
import moment from "moment";
import "moment/locale/bn";
import { useRouter } from 'next/router';
import Loader from "@/components/Loader";
import Header from "@/Commmon/Header/Header";
import TenthSection from "@/Home/TenthSection";
import ColumnHead from "@/Commmon/ColumnHead/ColumnHead";
import SmallHorizontalCard from "@/components/Cards/SmallHorizontalCard";
import Footer from "@/Commmon/Footer/Footer";
import UseNewsFetch from "@/Commmon/FetchNews/UseNewsFetch";
import Link from "next/link";
import { extractFileId } from "@/components/Utils/FileId";
import Image from "next/image";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import MetaDecorator from "@/components/Utils/MetaDecorator";
import { stripHtml } from "string-strip-html";

function Article({ article, error }) {
  const router = useRouter();
  const { data: allCards, loading: loading1, error: error1 } = UseNewsFetch("Latest", null, null, null, 6, "desc");

  if (router.isFallback || !article) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  moment.locale("bn");
  const formattedDate = moment(article.createdAt).format("LL");
  const formattedTime = moment(article.createdAt).format("LTS");

  const shareUrl = `https://www.bartaloy24.com/news/${router.query.articleId}`;
  const strippedDescription = stripHtml(article.editorText).result;

  return (
    <>
      {article && (
        <div>
          <MetaDecorator title={article.title} description={strippedDescription} baseUrl={shareUrl} imageUrl="http://res.cloudinary.com/ditdynru4/image/upload/v1677350769/WinnerImg/ftkekgk31hbv6u7qms5n.jpg" />
          <Header />
          <div className="flex flex-wrap mx-2 md:mx-5 lg:mx-5">
            <div className="w-full md:w-3/4 p-4">
              <div className="title">
                <h1 className="text-4xl font-bold my-4">{article.title}</h1>
              </div>
              <div className="author flex">
                <div className="author-name-date">
                  <div className="author-name text-base text-gray-600 pl-2">
                    লেখকঃ <span>{article.authorName}</span>, <span>{article.bio}</span>
                  </div>
                  <div className="publish-date text-base text-gray-600 pl-2 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="pl-1">
                      {formattedTime}, {formattedDate}
                    </span>
                  </div>
                </div>
              </div>
              <div className="shareButton flex justify-start my-2">
                <FacebookShareButton url={shareUrl} className="Demo__some-network__share-button mx-1">
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <FacebookMessengerShareButton url={shareUrl} className="Demo__some-network__share-button mx-1">
                  <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
                <WhatsappShareButton url={shareUrl} className="Demo__some-network__share-button mx-1">
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button mx-1">
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <TwitterShareButton url={shareUrl} className="Demo__some-network__share-button mx-1">
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <EmailShareButton url={shareUrl} className="Demo__some-network__share-button mx-1">
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </div>
              <div className="content pt-6">
                <div className="image-box bg-gray-100">
                  <Image
                    src={extractFileId(article.file)}
                    alt=""
                    className="w-full h-full object-cover transition-transform transform group-hover:scale-100"
                    layout="responsive"
                    height="500"
                    width="500"
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: article.editorText }}
                  className="article-text my-3"
                ></div>
              </div>
              <TenthSection />
            </div>
            <div className="w-full md:w-1/4 p-4">
              <div className="mt-12 md:mt-[12.5rem]">
                <ColumnHead columnHeadTag="সর্বশেষ খবরগুলো পড়ুন" />
              </div>
              <div>
                {allCards &&
                  allCards.map((card, index) => (
                    <Link href={`/news/${card._id}`} key={index}>
                      <SmallHorizontalCard {...card} />
                    </Link>
                  ))}
              </div>
              <div className="mt-5">
                <a href="https://www.facebook.com/bartaloy24">
                  <div className="w-full h-64 group mb-4">
                    <div className="w-full h-full group">
                      <Image
                        src="/images/Article/bartaloy.jpg"
                        alt=""
                        className="w-full h-full object-cover "
                        height="100"
                        width="100"
                      />
                    </div>
                    <div className="text-xs">Advertisement</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Article;

export async function getServerSideProps(context) {
  const { articleId } = context.params;

  try {
    const response = await axios.get(`https://api.bartaloy24.com/api/getNewsByArticleId/${articleId}`);
    const article = response.data;

    return {
      props: {
        article,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
}

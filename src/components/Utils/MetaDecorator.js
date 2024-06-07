import Head from "next/head";

//const hostname='https://bartaloy24.com'
const MetaDecorator = ({ title, description,baseUrl, imageUrl }) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:url" content={baseUrl}/>
    <meta property="og:type" content="website" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:url" content={baseUrl} />
  </Head>
);



export default MetaDecorator;
import axios from "axios";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://www.bartaloy24.com/';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.bartaloy24.com</loc>
     </url>
     <url>
       <loc>https://www.bartaloy24.com/category/Latest</loc>
     </url>
     <url>
       <loc>https://www.bartaloy24.com/category/Politics</loc>
     </url>
     <url>
       <loc>https://www.bartaloy24.com/category/National</loc>
     </url>
     <url>
       <loc>https://www.bartaloy24.com/category/Crime</loc>
     </url>
     <url>
       <loc>https://www.bartaloy24.com/category/World</loc>
     </url>
     <url>
       <loc>https://www.bartaloy24.com/category/Science</loc>
     </url>
     <url>
       <loc>https://www.bartaloy24.com/category/Education</loc>
     </url>
       <url>
       <loc>https://www.bartaloy24.com/category/Health</loc>
     </url>
     <url>
       <loc>https://www.bartaloy24.com/category/Entertainment</loc>
     </url>
     <url>
       <loc>https://www.bartaloy24.com/category/Sports</loc>
     </url>
     ${posts?.map((item) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/news/${item?._id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    const params={}
  const {data} = await axios.get("https://api.bartaloy24.com/api/news", {
    params,
  });
  //console.log(data)
  

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data);
 
  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
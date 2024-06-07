import MetaDecorator from '@/components/Utils/MetaDecorator';
import HomePage from '../Home/Home'
import Image from 'next/image';
import { extractFileId } from '@/components/Utils/FileId';
export default function Home() {
  // let url="https://drive.google.com/file/d/1GAtbDS7Yab4cPibyWLuGYDFXHiFvPiD8/view?usp=drive_link"
  // let imgUrl=extractFileId(url)
  return (
    <>
      <MetaDecorator title="হোম-বার্তালয়২৪" description="অনলাইন ভিত্তিক নিউজ পোর্টাল" baseUrl="https://bartaloy24.com"  imageUrl="https://drive.google.com/file/d/1GAtbDS7Yab4cPibyWLuGYDFXHiFvPiD8/view?usp=drive_link" />
       {/* <Image src={imgUrl} alt='' height="100" width="100"/> */}
       
      <HomePage />   
    </>
  );
}

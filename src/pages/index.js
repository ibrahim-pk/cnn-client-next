import MetaDecorator from '@/components/Utils/MetaDecorator';
import HomePage from '../Home/Home'
import Image from 'next/image';
import { extractFileId } from '@/components/Utils/FileId';
import Head from 'next/head';
export default function Home() {
  // let url="https://drive.google.com/file/d/1GAtbDS7Yab4cPibyWLuGYDFXHiFvPiD8/view?usp=drive_link"
  // let imgUrl=extractFileId(url)
  return (
    <>
       {/* <Image src={imgUrl} alt='' height="100" width="100"/> */}
       <Head>
       <meta name="google-site-verification" content="xsk8qagysJtZHM5JN6P1VXaAyb6EDeWBU2wEL99DaWI" />
       </Head>
      <HomePage />   
    </>
  );
}

import Head from 'next/head';
import { Poppins } from 'next/font/google';
import Index_components from './Index_components';
import { useRef } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-poppins'
});

export default function Home() {
  const arrImg: string[] = [
    'https://plus.unsplash.com/premium_photo-1677686707450-66de10888b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1680296583616-36a5f09bd31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1680562725589-eb6b43ff0145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-36 ">
        <h1 className={`text-center text-black text-5xl font-medium ${poppins.className} mb-5`}>
          Live Anywhere
        </h1>
        <h2 className={`text-center mb-8 font-light text-xl text-gray-600 ${poppins.className}`}>
          Keep calm & travel on
        </h2>
        <div className='w-full flex justify-center'>
          <input type='text' className='
          outline-none
          border-2
          border-gray-400
          justify-self-center
          w-[40%]
          h-[35px]
          rounded-xl
          p-4
          focus:border-emerald-400
          motion-safe:hover:scale-110
          transition-transform
          ' />
        </div>
        <div
          className="grid
          gap-x-6
          max-w-6xl
          mx-auto
          grid-cols-13
          p-10"

        >
          {arrImg.map((item: string, index: number) => {
            return (
              <div className="flex flex-col" key={index}>
                <div className="h-96 mb-5">
                  <img src={item} alt="" className="w-full h-full rounded-lg object-cover" />
                </div>
                <h3 className={`text-center mb-3 font-medium ${poppins.className} `}>
                  Enjoy a greate cold
                </h3>
                <span
                  className="block
                text-center
                text-gray-500
                text-sm"
                >
                  6,789 properties
                </span>
                <button
                  className="inline-block
                py-3 px-10 m-5
                text-gray-600
                bg-green-400
                rounded-2xl
                justify-self-center
                lg:hover:bg-green-200
                transition-colors"
                >
                  Submit
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Index_components />
    </>
  );
}

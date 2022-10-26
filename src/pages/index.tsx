import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  // set state as number
  const [PreviousNotes, setPreviousNotes] = useState(4);

  // get state, conert to array
  const newArray = PreviousNotes;
  const pushArray = [];
  for (let i = 0; i < PreviousNotes.valueOf() + 1; i++) {
    pushArray.push(i);
  }
  //remove zeros from array
  pushArray.splice(0, 1);
  console.log(pushArray);

  return (
    <>
      <Head>
        <title>Automatic Thoughts Journal</title>
        <meta
          name="description"
          content="An journal to evaluate negative automatic thoughts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="justify-left items-left  m-0 flex min-h-screen flex-row">
        <div className=" mx-0 flex basis-2/12 flex-col items-center bg-gray-700 text-lg leading-normal ">
          {pushArray.map((note, index) => {
            return (
              <div className="flex flex-wrap text-red-300" key={index}>
                This is note #{index}
              </div>
            );
          })}
        </div>
        <div className="basis-10/12 bg-gray-900 text-white">
          <div className="mx-auto grid grid-cols-3 justify-center justify-items-center border-4 px-4 ">
            <h1>Automatic Thoughts</h1>
            <h1>Cognitive Distortion</h1>
            <h1>Reasoning</h1>
          </div>
          <input className="border-4"></input>
        </div>
      </main>
    </>
  );
};

export default Home;

//type TechnologyCardProps = {
//  name: string;
//  description: string;
//  documentation: string;
//};

//const TechnologyCard = ({
//  name,
//  description,
//  documentation,
//}: TechnologyCardProps) => {
//  return (
//    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
//      <h2 className="text-lg text-gray-700">{name}</h2>
//      <p className="text-sm text-gray-600">{description}</p>
//      <a
//        className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
//        href={documentation}
//        target="_blank"
//        rel="noreferrer"
//      >
//        Documentation
//      </a>
//    </section>
//  );
//};

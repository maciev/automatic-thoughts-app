import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

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

      <main className="justify-left items-left container flex min-h-screen flex-row text-white">
        <div className=" basis-1/5 bg-gray-700 text-lg leading-normal text-white text-gray-700">
          Automatic Thoughts Application
        </div>
        <div className="basis-4/5 bg-gray-900">
          <div className="mx-auto grid grid-cols-3 justify-center justify-items-center px-4 ">
            <h1>Automatic Thoughts</h1>
            <h1>Cognitive Distortion</h1>
            <h1>Reasoning</h1>
          </div>
          <div className="">"This is how I'm feeling"</div>
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

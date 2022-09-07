import { Heading } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a>Yes</a>
      <Heading size="xl">Heading</Heading>
    </div>
  );
};

export default Home;

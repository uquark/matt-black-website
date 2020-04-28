import Head from "next/head";
import Events from "./Events";
import Offerings from "./Offerings";
import Packages from "./Packages";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Events />
      <hr />
      <Offerings />
      <hr />
      <Pricing />
      <hr />
      <Packages />
    </div>
  );
}

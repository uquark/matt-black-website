import Head from "next/head";
import { Grommet } from "grommet";

import Events from "./Events";
import Offerings from "./Offerings";
import Packages from "./Packages";
import Pricing from "./Pricing";
export default function Home() {
  return (
    <Grommet plain>
      <Head>
        <title>Matt Black Coffee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Events />
      <hr />
      <Offerings />
      <hr />
      <Pricing />
      <hr />
      <Packages />
    </Grommet>
  );
}

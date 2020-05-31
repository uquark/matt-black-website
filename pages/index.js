import Head from "next/head";
import { Grommet } from 'grommet';

import Events from "./Events";
import Offerings from "./Offerings";
import Packages from "./Packages";
import Pricing from "./Pricing";
export default function Home() {
  return (
    <Grommet plain>
      <Head>
        {/*Need to start pulling meta data from the strapi CMS*/}
        <title>Coffee Cart For Events | Cafe Quality Speciality Coffee & Tea | Matt Black Coffee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Need to add routing*/}
      <Events />
      {/* <hr />
      <Offerings />
      <hr />
      <Pricing />
      <hr />
      <Packages /> */}
    </Grommet>
  );
}

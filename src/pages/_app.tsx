import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout";
import { RecoilRoot } from "recoil";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <RecoilRoot>
        <Component {...pageProps} />;
      </RecoilRoot>
    </Layout>
  );
};

export default MyApp;

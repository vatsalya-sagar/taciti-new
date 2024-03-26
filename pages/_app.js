import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Layout from "../component/Layout";
import '@/styles/globalallfont.css'
import "@/styles/globalallfont.css";
// import "@/styles/elemntor.css";

import NProgress from "nprogress";
import React, { useEffect } from "react";
import Router from "next/router";

export default function App({ Component, pageProps }) {
  Router.onRouteChangeStart = (url) => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

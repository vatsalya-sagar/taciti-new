import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Layout from "../component/Layout";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

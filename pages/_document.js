import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/public/favicon.png" sizes="32x32" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-css"
          href="https://taciti.coinage.host/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.27.0"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-common-css"
          href="https://taciti.coinage.host/wp-content/plugins/elementor/assets/css/common.min.css?ver=3.19.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-theme-ui-light-css"
          href="https://taciti.coinage.host/wp-content/plugins/elementor/assets/css/theme-light.min.css?ver=3.19.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-frontend-css"
          href="https://taciti.coinage.host/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.19.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-9-css"
          href="https://taciti.coinage.host/wp-content/uploads/elementor/css/post-9.css?ver=1708501854"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-global-css"
          href="https://taciti.coinage.host/wp-content/uploads/elementor/css/global.css?ver=1708521135"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-86-css"
          href="https://taciti.coinage.host/wp-content/uploads/elementor/css/post-86.css?ver=1708928359"
          media="all"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

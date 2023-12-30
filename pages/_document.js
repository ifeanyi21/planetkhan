import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Planet Khan Multimedia</title>

      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta content="Explore boundless creativity with Planet Khan Multimedia – your gateway to a world where imagination knows no limits. We specialize in crafting immersive multimedia experiences that captivate audiences through innovative design, video production, and digital storytelling. Unleash the power of multimedia with Planet Khan, where artistry meets technology, and every project is a journey into the extraordinary. Join us on a voyage of visual excellence and discover the endless possibilities of multimedia innovation." />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

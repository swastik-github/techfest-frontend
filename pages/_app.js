import "../styles/globals.css";
import "antd/dist/antd.css";
import "../styles/Slider.css";
import "../styles/antd.less";
import "../styles/aboutSlider.css";
import Head from "next/head";
import Header from "../components/header/Header";
import { AppWrapper } from "../context/state";
import Footer from "../components/footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname == "/404") {
    return <Component {...pageProps} />;
  }

  return (
    <AppWrapper>
      <Head>
        <title>Techfizz 2k22 | Oriental College of Technology</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preload" as="image" href="/images/b1.webp"></link>
        <link rel="preload" as="image" href="/images/people.jpeg"></link>
        <link rel="preload" as="image" href="/images/hamburger.png"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teko:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="body-container">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </AppWrapper>
  );
}

export default MyApp;

import "../styles/globals.css";
import "antd/dist/antd.css";
import "../styles/Slider.css";
import Header from "../components/header/Header";
import { AppWrapper } from "../context/state";
import Footer from "../components/footer/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <div className="body-container">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </AppWrapper>
  );
}

export default MyApp;

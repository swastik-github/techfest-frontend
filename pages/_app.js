import "../styles/globals.css";
import "antd/dist/antd.css";
import "../styles/Slider.css";
import classes from "../components/header/header.module.css";
import { AppWrapper } from '../context/state'
function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
      </AppWrapper>
  );
}

export default MyApp;

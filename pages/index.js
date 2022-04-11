import styles from "../styles/Home.module.css";
import classes from "../components/header/header.module.css";
import Slider from "../components/slider/Slider";
import Sponsors from "../components/Sponsors";
import { Button } from "antd";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={classes.registerBtn}>
        <Button
          size="large"
          type="primary"
          onClick={() => {
            router.push("/competitions");
          }}
        >
          Register For Events
        </Button>
      </div>
      <div className={classes.container02}>
        <h1>
          Tech Fest <span> 2022-23</span>{" "}
        </h1>
      </div>
      <Slider />
      <div style={{ marginBottom: "150px" }} className={classes.sponsors}>
        <Sponsors />
      </div>
    </div>
  );
}

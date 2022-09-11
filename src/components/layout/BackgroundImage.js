import classes from "./BackgroundImage.module.css";
import { useEffect, useState } from "react";

const images = [
  "background-images/1.jpg",
  "background-images/2.jpg",
  "background-images/3.jpg",
];

function BackgroundImage() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 2 ? 0 : v + 1;
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return <img className={classes.bgImage} src={images[value]} alt="img"></img>;
}
export default BackgroundImage;

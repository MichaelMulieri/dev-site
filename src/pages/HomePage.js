import { Fragment, useEffect } from "react";
import sound from "../sounds/Typing.mp3";

import styles from "./HomePage.module.css";

const typingSound = new Audio(sound);

const HomePage = ({ handleBtnClick, buttonShown, typeText, setTypeText }) => {
  if (typeText) {
    typingSound.currentTime = 0;
    typingSound.play();
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypeText(false);
    }, 6500);

    return () => {
      clearTimeout(timeout);
      typingSound.pause();
    };
  }, [setTypeText]);

  return (
    <Fragment>
      {buttonShown ? (
        <div className={styles.myNameIsBtnDiv}>
          <button onClick={handleBtnClick}>Hello, my name is...</button>
        </div>
      ) : (
        <Fragment>
          <div className={`${styles.nameMain} ${styles.four}`}>
            <div className={styles.type}>
              <h1 className={typeText ? styles.typingAnimation : ""}>
                Michael Mulieri
              </h1>
            </div>
          </div>
          <div className={`${styles.underName} ${styles.four2}`}>
            <div className={styles.type2}>
              <h3 className={typeText ? styles.typingAnimation : ""}>
                Web Developer
              </h3>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomePage;

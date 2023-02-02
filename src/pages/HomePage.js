import { Fragment } from "react";
import styles from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <Fragment>
      {props.buttonShown ? (
        <div className={styles.myNameIsBtnDiv}>
          <button onClick={props.handleBtnClick}>Hello, my name is...</button>
        </div>
      ) : (
        <Fragment>
          <div className={`${styles.nameMain} ${styles.four}`}>
            <div className={styles.type}>
              <h1 className={styles.typing}>Michael Mulieri</h1>
            </div>
          </div>
          <div className={`${styles.underName} ${styles.four2}`}>
            <div className={styles.type2}>
              <h3 className={styles.typing2}>Web Developer</h3>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomePage;

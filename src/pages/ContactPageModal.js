import { Fragment } from "react";
import styles from "./ContactPageModal.module.css";

const ContactPageModal = () => {
  return (
    <Fragment>
      <div className={styles.contactWrapper}>
        <div className={styles.content}>
          <div className={styles.header}></div>
          <div className={styles.body}>
            <div className={styles.phoneNumDiv}>
              <h4>516-375-8499</h4>
            </div>
            <div className={styles.bodyDiv}>
              <h4>mikemulieri@gmail.com</h4>
              <a
                className={styles.email}
                href="mailto:mikemulieri@gmail.com?body=My custom mail body"
              >
                Send me an email
              </a>
            </div>
          </div>
          <div className={styles.footer}></div>
        </div>
      </div>
      )
    </Fragment>
  );
};

export default ContactPageModal;

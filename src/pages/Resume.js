import resume from "../pdf/Michael_Mulieri_Resume_.pdf";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resumeWrapper}>
      <object data={resume} type="application/pdf" width="100%" height="100%">
        <p>
          Alternative text - include a link <a href={resume}>to the PDF!</a>
        </p>
      </object>
    </div>
  );
};

export default Resume;

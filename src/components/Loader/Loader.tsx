import styles from "./Loader.module.css";

import { FC } from "react";

export const Loader: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loader}></div>
    </div>
  );
};

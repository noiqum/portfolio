import React, { useState } from "react";
import styles from "./m-header.module.scss";

function MobileHeader({ modeChange }) {
  return (
    <div>
      <div className={styles.switch__wrapper}>
        <label className={styles.switch__wrapper__label} htmlFor="checkbox">
          <input
            className={styles.switch__wrapper__input}
            type="checkbox"
            id="checkbox"
            onChange={modeChange}
          />
          <div className={styles.slider}></div>
        </label>
      </div>
    </div>
  );
}

export default MobileHeader;

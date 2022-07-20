import * as React from "react";
import { FC } from "react";
import styles from "./companyInfo.module.css";

const CompanyInfo: FC = () => {
  return (
    <div className={styles.view_comp_card_wr}>
      <div className={styles.view_comp_card_info_wr}>
        <div className={styles.view_comp_card_info_title}>О компании</div>
        <div className={styles.view_comp_card_info_desc}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </span>
          <div className={styles.view_comp_card_info_desc_full}>подробнее</div>
        </div>
      </div>
      <div className={styles.view_comp_card_tag_wr}>
        {[
          "электроника и бытовая техника",
          "электроника",
          "электроника и бытовая техника",
          "США",
          "США",
        ].map((el) => {
          return <div className={styles.view_comp_card_tag_item}>{el}</div>;
        })}
      </div>
    </div>
  );
};

export default CompanyInfo;

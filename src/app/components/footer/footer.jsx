import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { social_media } from "./data";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className="copy_right">
        ©{currentYear} Heaxshop. All rights reserved
      </div>
      <div className={styles.soical}>
        {social_media.map((media) => (
          <Image
            key={media.id}
            src={media.name}
            width={20}
            height={20}
            className={styles.icon}
            alt={`Heaxshop ${media.about} link`}
          />
        ))}
      </div>
    </div>
  );
}

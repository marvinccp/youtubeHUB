import Link from "next/link";
import React from "react";
import styles from "../styles/Navigation.module.css";
import Image from "next/image";

export const Navigation = () => {
  return (
    <section className={styles.container}>
      <Link href={"/"}>
        <Image
          src={"/images/logo_my_channels.png"}
          width={140}
          height={35}
          alt={"logo_channels"}
        />
      </Link>
      <h5>@MarvinBerrio2023</h5>
    </section>
  );
};

// import Image from 'next/image'
import Image from "next/image";
import styles from "../styles/page.module.css";
import { dataChannels } from "../helpers/data_channels";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h4 className={styles.title}>
          Hello, welcome to my YouTube channel hub.
        </h4>
        <div className={styles.content}></div>
        <p className={styles.description}>
          Hello, these are my YouTube channels. I am currently a YouTube partner
          and create content on various topics
        </p>
        <div className={styles.cards_container}>
          {dataChannels.map((channel) => (
            <div key={channel.name_channel} className={styles.card}>
              <h5>{channel.name_channel}</h5>
              <Link href={`/${channel.playlistid}`}>
                <Image
                  className={styles.image}
                  src={`/images/${channel.image}.jpg`}
                  width={100}
                  height={100}
                  alt={`logo ${channel.name_channel}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

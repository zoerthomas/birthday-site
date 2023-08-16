import styles from "./page.module.css";
import { Press_Start_2P } from "next/font/google";

const roboto = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="body">
      <main className={styles.main}>
        <img src="playboywelcome.gif" alt="welcome" height={150} width={150} />
        <div className={styles.description}>
          <div className={roboto.className}>
            <p>ZOE TURNS 30!!</p>
          </div>
          <div className={styles.wordart}>You&apos;re Invited</div>
          <div className={styles.card}>
            <div className={styles["card-inner"]}>
              <div className={styles["card-front"]}>
                <p>
                  28th October 2023 <br />
                  6pm til late
                </p>
              </div>
              <div className={styles["card-back"]}>
                <p>
                  Big Moose Coffee <br />
                  Cardiff
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

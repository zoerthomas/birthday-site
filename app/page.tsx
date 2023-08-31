"use client";

import React, { useState } from "react";

import ReactCardFlip from "react-card-flip";

import styles from "./page.module.css";
import { Press_Start_2P } from "next/font/google";

const roboto = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [rotated, setRotated] = useState(false);
  return (
    <div className="body">
      <main className={styles.main}>
        <img src="playboywelcome.gif" alt="welcome" height={150} width={150} />
        <div className={styles.description}>
          <div className={roboto.className}>
            <p>ZOE TURNS 30!!</p>
          </div>
          <div className={styles.wordart}>You&apos;re Invited</div>
          <div className={roboto.className}>
            <p>
              click below for the
              <br /><br />
              {rotated ? `date` : `venue`}
            </p>
          </div>
          <div onClick={() => setRotated((rotated) => !rotated)}>
            <ReactCardFlip isFlipped={rotated} flipDirection="vertical">
              <div className={styles.card}>
                <div className={styles["card-inner"]}>
                  <div className={styles["card-front"]}>
                    <p>
                      28th October 2023 <br />
                      6pm til late
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles["card-inner"]}>
                  <div className={styles["card-back"]}>
                    <p>
                      Big Moose Coffee <br />
                      Cardiff
                    </p>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
          <div className={roboto.className}>
            <p>RSVP <a href="mailto:riyals-nickels-0e@icloud.com?subject=Your birthday party!">here</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

import React from "react";
// import bootstrap from 'bootstrap'
import styles from "./Info.module.css";

export default function Info() {
  return (
    <div className={styles.main}>
      <div  className={styles.container}>
        <h1>
          Information and updates on the Coronavirus situation in your area
        </h1>
        <h3>Updated: May 13th 2020</h3>

        <p>
          The world unites under unpleasant circumstances brought on by the
          coronavirus pandemic, impacting everyone’s life directly or
          indirectly. During a time when everything is slowing down, we have
          time to reflect and re-evaluate our core values, keeping in mind all
          the hard-working medical staff and everyone else offering a helping
          hand during this time. Thank you and stay safe. This page is a place
          where you can find relevant coronavirus information about a country you
          are in, and how to protect yourself and others. All the information is
          from the valid and official sources. Everything is in one place, so
          you don’t need to get overwhelmed when searching all over the
          internet.
        </p>
      </div>
      <div className={styles.videoframe}>
        <iframe
          title="Covid19 signs and symptoms"
          width="100%"
          height="490"
          src="https://www.youtube.com/embed/U8r3oTVMtQ0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

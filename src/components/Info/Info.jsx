import React from "react";
require('bootstrap')
import styles from "./Info.module.css";

export default function Info() {
  return (
    <div>
      <div>
        <h1>
          Information and updates on the Coronavirus situation in your area
        </h1>
        <p>Updated: May 13th 2020</p>

        <p>
          The world unites under unpleasant circumstances brought on by the
          coronavirus pandemic, impacting everyone’s life directly or
          indirectly. As the travel industry has been heavily affected,
          LuggageHero wants to keep in touch with all the travellers out there
          who are stuck in a foreign city not knowing when they will be able to
          get back home. During a time when everything is slowing down, we have
          time to reflect and re-evaluate our core values, keeping in mind all
          the hard-working medical staff and everyone else offering a helping
          hand during this time. Thank you and stay safe. We created this page
          where you can find relevant coronavirus information about a city you
          are in, and how to protect yourself and others. All the information is
          from the valid and official sources. Everything is in one place, so
          you don’t need to get overwhelmed when searching all over the
          internet.
        </p>
      </div>
      <iframe
        width="871"
        height="490"
        src="https://www.youtube.com/embed/U8r3oTVMtQ0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

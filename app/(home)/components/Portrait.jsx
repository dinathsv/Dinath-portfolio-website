"use client";

import { useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import LocalTime from "./LocalTime";
import styles from "./Hero.module.css";

export default function Portrait() {
  const frame = useRef(null);

  function tilt(event) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    frame.current.style.setProperty("--tilt-x", `${-y * 9}deg`);
    frame.current.style.setProperty("--tilt-y", `${x * 11}deg`);
  }

  function resetTilt() {
    frame.current.style.removeProperty("--tilt-x");
    frame.current.style.removeProperty("--tilt-y");
  }

  return (
    <figure className={styles.portrait}>
      <div className={styles.mount} onPointerMove={tilt} onPointerLeave={resetTilt} onPointerCancel={resetTilt}>
        <div className={styles.frame} ref={frame}>
          <div className={styles.print}>
            <Image src="/my-profile.jpeg" fill priority
              sizes="(max-width: 740px) min(90vw, 560px), (max-width: 1440px) 42vw, 585px"
              alt="Portrait of Sivaranjan Dinath" className={styles.portraitImage} />
            <div className={styles.trim} aria-hidden="true"><i /><i /><i /><i /></div>
          </div>
          <div className={styles.badge} aria-hidden="true">
            {[0, 2, 4, 6, 8].map(depth => <i key={depth} style={{ "--depth": `${depth}px` }} />)}
          </div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        <span><MapPin aria-hidden="true" size={15} /> Colombo, Sri Lanka</span>
        <LocalTime />
      </figcaption>
    </figure>
  );
}

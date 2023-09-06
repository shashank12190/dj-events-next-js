import React from "react";
import styles from "@/styles/EventItem.module.css";
import Link from "next/link";

const EventItem = ({ evt }) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <img
          src={evt.image ? evt.image : `/images/event-default.png`}
          alt={evt.name}
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div className={styles.link}>
        <Link className="btn" href={`/events/${evt.slug}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default EventItem;

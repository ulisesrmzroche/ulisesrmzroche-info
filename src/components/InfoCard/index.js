import React from "react";
import NavSocial from '@/components/NavSocial'
import styles from "./styles.module.css";

export default function InfoCard() {
  return (
      <div className={styles.InfoCard}>
    <div className="card">
      <div className="card-header">
        <h1 className="card-header-title">@ulisesrmzroche</h1>
      </div>
      <div className="card-image">
        <figure classname="image is-square">
            <img src="/profile-pic.jpg" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
          <p>
              My name is <strong>Ulises Ramirez-Roche </strong>
              and I'm a software developer, writer, and musician living and working out of Austin TX
          
          </p>
      </div>
      <nav className="panel">
        <a className="panel-block" href="https://ulisesrmzroche.blog">
          Personal Blog
        </a>
        <a className="panel-block" href="https://ulisesrmzroche.dev">
          Dev Blog
        </a>
      </nav>
      <div className="card-content">
        <NavSocial />
      </div>
    </div>

      </div>
  );
}

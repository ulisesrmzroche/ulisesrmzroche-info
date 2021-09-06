import React from "react"
import NavSocial from "@/components/NavSocial"
import { ProfilePic } from "#components"
import styles from "./styles.module.css"

const InfoCardTitle = () => {
  return <h1 className="card-header-title">@ulisesrmzroche</h1>
}

const DisabledLink = ({ text, children }) => {
  return (
    <a
      className="panel-block"
      style={{ cursor: "not-allowed", color: "#aaa" }}
      href="javascript:void(0)"
      onClick={(e) => {
        e.preventDefault()
      }}
    >
      {text || children}
    </a>
  )
}

export default function InfoCard() {
  return (
    <div className={styles.InfoCard}>
      <div className="card">
        <div className="card-header">
          <InfoCardTitle />
        </div>
        <div className="card-image">
          <figure className="image">
            <ProfilePic />
          </figure>
        </div>
        <div className="card-content">
          <p>
            My name is <strong>Ulises Ramirez-Roche </strong>
            and I'm a software developer, writer, and musician living and
            working out of Austin TX
          </p>
        </div>
        <nav className="panel">
          <a className="panel-block" href="https://blog.ulisesrmzroche.me">
            #blog
          </a>
          <a className="panel-block" href="https://dev.ulisesrmzroche.me">
            #dev
          </a>
          <DisabledLink>#wip</DisabledLink>
          <DisabledLink>#contact</DisabledLink>
        </nav>
        <div className="card-content">
          <NavSocial />
        </div>
      </div>
    </div>
  )
}

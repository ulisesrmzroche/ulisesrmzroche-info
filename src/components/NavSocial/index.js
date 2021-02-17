import React from "react"
import { Icon } from "@/components"
import styles from './index.module.css'

export default function NavSocial() {
  return (
    <nav className={styles.NavSocial}>
      <a href="https://ulisesrmzroche.dev"><Icon name="facebook" /></a>
      <a href="https://ulisesrmzroche.dev"><Icon name="twitter" /></a>
      <a href="https://ulisesrmzroche.dev"><Icon name="instagram" /></a>
      <a href="https://ulisesrmzroche.dev"><Icon name="github" /></a>
      <a href="https://ulisesrmzroche.dev"><Icon name="linkedin" /></a>
      <a href="https://ulisesrmzroche.dev"><Icon name="youtube" /></a>
    </nav>
  );
}

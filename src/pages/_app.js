import "@/styles/globals.css"
import styles from "@/styles/App.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="_app">
      <div className={styles.AppContainer}>
        {<Component {...pageProps} />}
      </div>
    </div>
  )
}

export default MyApp;

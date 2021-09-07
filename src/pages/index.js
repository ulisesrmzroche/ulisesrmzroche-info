import Head from "next/head"
import InfoCard from "#components/InfoCard"

export default function Home() {
  return (
    <div id="HomePage">
      <Head>
        <title>@ulisesrmzroche</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <main>
        <InfoCard />
      </main>
    </div>
  )
}

import GabeDashboard from "@/components/GabeDashboard";
// import Login from "@/components/Login";
import Head from "next/head";

export default function Home() {
  // function onBtnClick() {
  //   fetch("/api/users")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }

  return (
    <>
      <Head>
        <title>MSW Example</title>
        <meta name="description" content="Simple MSW examples in Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Login /> */}
        <GabeDashboard />
      </main>
    </>
  );
}

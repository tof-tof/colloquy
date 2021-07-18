import Head from "next/head";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home - Colloquy</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div className="h-screen bg-gradient-to-br from-secondary via-transparent">
        <div className="nav">
          <h1
            className="logo cursor-pointer text-7xl font-medium"
            onClick={() => {
              router.push("/app");
            }}
          >
            Colloquy
          </h1>
          <h3 className="text-2xl italic text-themeDarkBlue ml-14">
            Start the conversation
          </h3>
          <button
            className="btn ml-14 mt-5 text-2xl text-semibold bg-primary hover:bg-themeDarkBlue text-white static bottom-10"
            onClick={() => {
              router.push("/app");
            }}
          > Build your bot!</button>
        </div>
        <div className="mx-auto mb-auto w-min pt-24">
          <img className="splash" src="/assets/flat_background.svg"></img>
        </div>
      </div>
    </>
  );
}

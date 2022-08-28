import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  
  const handleClick =()=>{
    console.log("Button clicked");
    router.push('/blog')  //it will pushthe url to stack
    // router.replace will reset the history

  }
  return (
    <>
    <Head>
     
    </Head>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <br/>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <br/>
      <Link href="/docs">
        <a>Docs</a>
      </Link>{" "}
      <br/>
     <button onClick={handleClick}>Submit Order</button>
    </>
  );
}

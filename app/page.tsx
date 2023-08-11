import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}

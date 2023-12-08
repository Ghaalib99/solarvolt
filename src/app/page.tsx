import styles from "./page.module.css";
import Landing from "@/screens/landing";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
    </main>
  );
}

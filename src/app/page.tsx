import Books from "@/components/Books";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Books />
    </main>
  );
}

import Profile from "@/app/components/Profile/Profile";
import Posts from "@/app/components/Posts/Posts";
import styles from "./page.module.css";
import getUser from "./lib/getUser";

export default async function Home() {
  const MOCKED_USER = 'user1'
  const user = await getUser(MOCKED_USER);

  return (
    <main className={styles.main}>
      <Profile user={user} />
      <Posts users={user.friends} />
    </main>
  );
}

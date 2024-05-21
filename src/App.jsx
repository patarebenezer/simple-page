import { useEffect, useState} from "react";
import { ListItem } from "./components/ListItem/ListItem";
import { ProfileSection } from "./components/ProfileSection/ProfileSection";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";
import { mockData } from "./api/mockData";
import { fetchUsers } from "./api/fetchUsers";
import logo from "/logo.svg";
import styles from "./App.module.css";

function App() {
  const [profileInfo, setProfileInfo] = useState({
    username: "User",
    address: "123 King Street",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <a className={styles.logo} href="/">
            <img src={logo} alt="Users logo" />
            <div className={styles.logoText}>User DB</div>
          </a>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <a href="#search-section">Search</a>
              </li>
              <li>
                <a href="#profile-section">Profile</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={`container ${styles.mainContent}`}>
        <section className={styles.heroSection}>
          <div className={styles.heroHeading}>
            <img src={logo} alt="User DB logo" />
            <h1 className={styles.heroTitle}>User DB</h1>
          </div>
          <p
            className={styles.heroDesc}
            dangerouslySetInnerHTML={{
              __html: `Welcome back, <span>${profileInfo.username}</span>!<br/> The User Database is the best place to search for users from
            anywhere in the world.`,
            }}
          />
        </section>
        <section className={styles.searchSection} id="search-section">
          <SectionTitle>Search Users</SectionTitle>
          <label className="screenReaderOnly" htmlFor="search">
            Search for a User
          </label>
          <input
            id="search"
            placeholder="Search for a user..."
            className={styles.searchBar}
            type="text"
          />
          <ListItem
            name={mockData[0].name}
            thumbnail={mockData[0].thumbnail}
            email={mockData[0].email}
          />
          <ListItem
            name={mockData[1].name}
            thumbnail={mockData[1].thumbnail}
            email={mockData[1].email}
          />
          <ListItem
            name={mockData[2].name}
            thumbnail={mockData[2].thumbnail}
            email={mockData[2].email}
          />
          <ListItem
            name={mockData[3].name}
            thumbnail={mockData[3].thumbnail}
            email={mockData[3].email}
          />
          <ListItem
            name={mockData[4].name}
            thumbnail={mockData[4].thumbnail}
            email={mockData[4].email}
          />
          <ListItem
            name={mockData[5].name}
            thumbnail={mockData[5].thumbnail}
            email={mockData[5].email}
          />
          <ListItem
            name={mockData[6].name}
            thumbnail={mockData[6].thumbnail}
            email={mockData[6].email}
          />
          <ListItem
            name={mockData[7].name}
            thumbnail={mockData[7].thumbnail}
            email={mockData[7].email}
          />
        </section>
        <ProfileSection
          username={profileInfo.username}
          address={profileInfo.address}
          onSave={setProfileInfo}
        />
      </main>
    </>
  );
}

export default App;

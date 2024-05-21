import { useState } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./ProfileSection.module.css";

export const ProfileSection = ({ username, address, onSave }) => {
  const [profileInfo, setProfileInfo] = useState({
    username,
    address,
  });
  const [usernameLength, setUsernameLength] = useState(0);

  return (
    <section className={styles.profileSection} id="profile-section">
      <SectionTitle>My Profile</SectionTitle>
      <p>Your may update your profile details using the form below.</p>
      <div>
        <div>Username:</div>
        <input
          id="username"
          type="text"
          value={profileInfo.username}
          onChange={(e) => {
            profileInfo.username = e.target.value;
            setProfileInfo(profileInfo);
            setUsernameLength(profileInfo.username.length);
          }}
        />
        <div className={styles.charCount}>
          Character limit: {usernameLength} / 20
        </div>
        <div>Address:</div>
        <input
          id="address"
          type="text"
          value={profileInfo.address}
          onChange={(e) => {
            profileInfo.address = e.target.value;
            setProfileInfo(profileInfo);
          }}
        />
        <div
          className={styles.submit}
          onClick={(e) => {
            e.preventDefault();
            onSave(profileInfo);
          }}
        >
          Update profile
        </div>
      </div>
    </section>
  );
};
